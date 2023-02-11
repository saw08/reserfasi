import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Tambahhiburan() {
    let router = useRouter()
    const {
        namahiburan,
        harga,
        subhiburan,
        foto,
        deskripsi,
        objectId,
    } = router.query
    const [_namahiburan, setNamahiburan] = useState('');
    const [subtemp, setSubtemp] = useState('');
    const [_subhiburan, setSubhiburan] = useState([]);
    const [_harga, setHarga] = useState(0);
    const [_deskripsi, setDeskripsi] = useState('');
    const [_foto, setFoto] = useState([]);
    const [image, setImage] = useState([]);
    const [createObjectURL, setCreateObjectURL] = useState([]);
    const [uploading, setUploading] = useState(false)
    const [_gambarNew, setGambarNew] = useState([]);

    
    useEffect(() => {
        if (typeof namahiburan == 'string') {
            setNamahiburan(namahiburan)

        }
        if (typeof harga == 'string') {
            setHarga(harga)
        }
        if (typeof deskripsi == 'string') {
            setDeskripsi(deskripsi)
        }
        if (typeof subhiburan == 'string') {
            setSubhiburan(Object.assign(_subhiburan, JSON.parse(subhiburan)))
        }
        if (typeof foto == 'string') {
            setFoto(Object.assign(_foto, JSON.parse(foto)))
        }
    }, [namahiburan,
        harga,
        subhiburan,
        foto,
        deskripsi,
        objectId,])

    //UPDATE
    const handlePost = async (e) => {
        e.preventDefault();
        setUploading(true)

        //Cloudinary Update
        const body = new FormData();
        let imageUrl = []

        body.append('upload_preset', 'kemrangimg');
        //console.log("file", image)
        for (let i = 0; i < image.length; i++) {
            await body.append("file", image[i]);
            const response = await fetch('https://api.cloudinary.com/v1_1/perpus/image/upload', {
                method: "POST",
                body
            }).then(r => r.json());
            imageUrl.push(response.secure_url)
        }
        for (let i = 0; i < _foto.length; i++) {
            imageUrl.push(_foto[i])
        }
        setFoto(Object.assign(_foto, imageUrl))
        //Uploading
        if (imageUrl.length != 0) {
            setUploading(false)
        }
        // fields check
        try {
            // Update post
            await fetch('/api/db_hiburan', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    namahiburan: _namahiburan,
                    subhiburan: _subhiburan,
                    deskripsi: _deskripsi,
                    harga: _harga,
                    foto: _foto,
                    objectId: objectId
                }),
            });
            // reload the page
            alert('paket sukses diupdate')
            router.push('/admin/tambah-hiburan');
        } catch (error) {
            // Stop publishing state
        }
    };
    const onAddItemArray = () => {
        setSubhiburan(_subhiburan => [..._subhiburan, subtemp]);
        setSubtemp('')

    };
    const removeItemArray = (data) => {
        var index = _subhiburan.indexOf(data)
        if (index >= 0) {
            if (_subhiburan.length === 0) {
                setSubhiburan([])
            } else {
                setSubhiburan(tim => [...tim.slice(0, index), ...tim.slice(index + 1)])
            }
        }


    };
    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            var x = document.getElementById("image");

            setGambarNew(array => [...array, i.name])
            setImage(array => [...array, i]);
            setCreateObjectURL(array => [...array, URL.createObjectURL(i)]);
        }
    };


    const removeItemArrayGambar = (data) => {
        var index = _foto.indexOf(data)
        if (index >= 0) {
            if (_foto.length === 0) {
                setFoto([])
            } else {
                setFoto(array => [...array.slice(0, index), ...array.slice(index + 1)])
            }
        }
    }

    const removeItemArrayGambarNew = (data) => {
        var index = _gambarNew.indexOf(data)
        if (index >= 0) {
            if (_gambarNew.length === 0) {
                setGambarNew([])
                setFoto([])
                setCreateObjectURL([])
            } else {
                setGambarNew(array => [...array.slice(0, index), ...array.slice(index + 1)])
                setFoto(array => [...array.slice(0, index), ...array.slice(index + 1)])
                setCreateObjectURL(array => [...array.slice(0, index), ...array.slice(index + 1)])
            }
        }
    }
    
    return (
        <>

            <section id="events" className="events">
                <div className="container" >
                    <div className="section-title">
                        <h2>Reservation</h2>
                        <p>Lengkapi Data Reserfasi</p>
                    </div>
                    <form onSubmit={handlePost} >
                        <div className="col-lg-12">
                            <div className="mt-2 col-lg-6 col-md-10">
                                {_foto.length === 0 ? (
                                    <h4>Daftar Foto</h4>
                                ) : (
                                    <>

                                        {_foto.map((data, i) => (
                                            <>
                                                <div className='cols-2 mt-3 mb-3 row row-cols-2'>
                                                    <div className='col-10 col-md-10'>
                                                        <img id='image' className='img-fluid d-block border border-dark' width={300} height={300} src={`${data}`} />
                                                    </div>
                                                    <div className='col-10 col-md-2'>
                                                        <button className="form-control" type='button'
                                                            onClick={() => removeItemArrayGambar(data)}
                                                        >
                                                            <i className="fa fa-trash"></i></button>
                                                    </div>


                                                </div>
                                            </>


                                        ))}
                                    </>
                                )}
                                {_gambarNew.length === 0 ? (
                                    <></>
                                ) : (
                                    <>

                                        {_gambarNew.map((data, i) => (

                                            <>
                                                <div className='cols-2 mt-3 mb-3 row row-cols-2'>
                                                    <div className='col-10 col-md-10'>
                                                        <img id='image' className='img-fluid d-block border border-dark' width={300} height={300} src={createObjectURL[i]} />
                                                    </div>
                                                    <div className='col-10 col-md-2'>
                                                        <button className="form-control"
                                                            type='button'
                                                            onClick={() => removeItemArrayGambarNew(data)}
                                                        >
                                                            <i className="fa fa-trash"></i></button>
                                                    </div>

                                                </div>
                                            </>
                                        ))}
                                    </>
                                )}
                            </div>
                            <div className="col-lg-6 col-md-10 form-group mt-3">
                                <label style={{ color: "white" }}>Foto Hiburan (dapat di isi 3 foto)</label>
                                <input type="file" className="form-control" name="myImage" onChange={uploadToClient} />
                            </div>
                            <div className="col-lg-6 col-md-10 mt-3 form-group">
                                <label style={{ color: "white" }}>Nama Hiburan</label>
                                <input type="text"
                                    id="nama hiburan" name="namahiburan"
                                    className="form-control"
                                    placeholder="Nama Hiburan"
                                    onChange={(e) => setNamahiburan(e.target.value)}
                                    value={_namahiburan}
                                />
                                <div className="validate" />
                            </div>
                            <div className="row col-lg-6 col-md-10 mt-3 form-group">
                                <label style={{ color: "white" }}>Sub Paket</label>
                                <div className="col-lg-10 col-md-10 ">
                                    <input type="text" className="form-control"
                                        id="subtemp"
                                        name="subtemp"
                                        value={subtemp}
                                        onChange={(e) => setSubtemp(e.target.value)}
                                    />
                                </div>
                                <div className="col-lg-2 col-md-2 ">
                                    <button className="form-control" type='button' onClick={() => onAddItemArray()}>
                                        <i className="fa fa-plus"></i></button>
                                </div>

                            </div>
                            <div className="mt-3 col-md-10 col-lg-6 form-group">
                                <label style={{ color: "white" }} className="labels">Daftar Sub Hiburan</label>
                            </div>
                            <div className='row col-lg-6 col-md-10 mt-3 form-group'>
                                {_subhiburan.length === 0 ? (
                                    <label style={{ color: "white" }}>Isi Sub Hiburan</label>
                                ) : (
                                    <>

                                            {_subhiburan.map((data, i) => (
                                            <>
                                                <div className="col-md-10 col-md-10">
                                                    <input type="text" id={i} className="form-control col-10 mt-2 col-md-10" value={data} readOnly />
                                                </div>
                                                <div className='col-lg-2 col-md-2'>
                                                    <button className="form-control col-2 mt-2 col-sm-2" type='button'
                                                        onClick={() => removeItemArray(data)}
                                                    >
                                                        <i className="fa fa-trash"></i></button>
                                                </div>
                                            </>
                                        ))}
                                    </>
                                )}

                            </div>
                            <div className="col-lg-6 col-md-10 mt-3 form-group">
                                <label style={{ color: "white" }}>Harga</label>
                                <input type="number"
                                    id="harga"
                                    name="harga"
                                    className="form-control"
                                    placeholder="Harga"
                                    onChange={(e) => setHarga(e.target.value)}
                                    value={_harga}
                                />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-6 col-md-10 form-group mt-3">
                                <label style={{ color: "white" }}>Deskripsi</label>
                                <textarea type="formcontrol"
                                    id="deskripsi"
                                    name="deskripsi"
                                    className="form-control"
                                    placeholder="Deskripsi"
                                    onChange={(e) => setDeskripsi(e.target.value)}
                                    value={_deskripsi}
                                />
                                <div className="validate" />
                            </div>
                            <div className="text-center col-lg-6 col-md-10 form-group mt-5">
                                <button className="book-a-table-btn" type="submit">Tambah Hiburan</button>
                                {uploading &&
                                    <>
                                        <div className="lds-ellipsis"><div /><div /><div />
                                        </div>
                                    </>
                                }
                            </div>
                        </div>

                    </form>
                </div>
            </section>
\
        </>
    )
}
