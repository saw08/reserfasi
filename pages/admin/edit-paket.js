import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Editruangan() {
    let router = useRouter()
    const {
        namapaket,
        harga,
        subpaket,
        foto,
        objectId,
    } = router.query

    //State of Art
    const [_namapaket, setNamapaket] = useState('');
    const [_pakettemp, setPakettemp] = useState('');
    const [_subpaket, setSubpaket] = useState([]);
    const [_harga, setHarga] = useState(0);
    const [_foto, setFoto] = useState([]);
    const [image, setImage] = useState([]);
    const [createObjectURL, setCreateObjectURL] = useState([]);
    const [_gambarNew, setGambarNew] = useState([]);

    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [uploading, setUploading] = useState(false)




    //Set All
    useEffect(() => {
        if (typeof namapaket == 'string') {
            setNamapaket(namapaket)

        }
        if (typeof harga == 'string') {
            setHarga(harga)
        }
        if (typeof subpaket == 'string') {
            setFoto(Object.assign(_subpaket, JSON.parse(subpaket)))
        }
        if (typeof foto == 'string') {
            setFoto(Object.assign(_foto, JSON.parse(foto)))
        }
    }, [namapaket,
        harga,
        subpaket,
        foto,
        objectId])

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
            // await console.log(response)
            // await console.log('Secure URL')
            // await console.log(response.secure_url)
            imageUrl.push(response.secure_url)

            // console.log('Secure URL Array')
            // console.log(imageUrl)
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
            await fetch('/api/db_paket', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    namapaket: _namapaket,
                    harga: _harga,
                    subpaket: _subpaket,
                    foto: _foto,
                    objectId: objectId
                }),
            });
            // reload the page
            alert('paket sukses diupdate')
            router.push('/admin/tambah-menu');
        } catch (error) {
            // Stop publishing state
        }
    };
    const onAddItemArray = () => {
        setSubpaket(_subpaket => [..._subpaket, pakettemp]);
        setPakettemp('')
    };
    const removeItemArray = (data) => {
        var index = _subpaket.indexOf(data)
        if (index >= 0) {
            if (_subpaket.length === 0) {
                setSubpaket([])
            } else {
                setSubpaket(tim => [...tim.slice(0, index), ...tim.slice(index + 1)])
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
                <div className="container " >
                    <div className="section-title mt-4">
                        <p>Edit Data Paket</p>
                    </div>
                    <form onSubmit={handlePost} >
                        <div className="col-lg-7 col-md-11 p-3" style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.8rem' }} >
                            <div className="mt-2 col-lg-12 col-md-12">
                                {_foto.length === 0 ? (
                                    <h4>Daftar Foto</h4>
                                ) : (
                                    <>

                                        {_foto.map((data, i) => (
                                            <>
                                                <div className='cols-2 mt-3 mb-3 row row-cols-2'>
                                                    <div className='col-lg-6 col-md-8'>
                                                        <img id='image' className='img-fluid d-block border border-dark' width={300} height={300} src={`${data}`} />
                                                    </div>
                                                    <div className='col-2 col-md-2'>
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
                            <div className="col-lg-12 col-md-12 form-group mt-3">
                                <label style={{ color: "white" }}>Pilih Foto Paket(dapat di isi 3 foto)</label>
                                <input type="file" id="files" className="form-control" name="myImage" style={{ content: 'Select some files' }} onChange={uploadToClient} />
                            </div>
                            <div className="col-lg-12 col-md-12 mt-3 form-group">
                                <label style={{ color: "white" }}>Nama Paket</label>
                                <input type="text"
                                    id="namapaket" name="namapaket"
                                    className="form-control"
                                    placeholder="Nama Paket"
                                    onChange={(e) => setNamapaket(e.target.value)}
                                    value={_namapaket}
                                />
                                <div className="validate" />
                            </div>
                            <div className="row col-lg-12 col-md-12 mt-3 form-group">
                                <label style={{ color: "white" }}>Tambah Sub Menu Paket</label>
                                <div className="col-lg-10 col-md-10 ">
                                    <input type="text" className="form-control"
                                        id="subtemp"
                                        name="subtemp"
                                        value={_pakettemp}
                                        onChange={(e) => setPakettemp(e.target.value)}
                                    />
                                </div>
                                <div className="col-lg-2 col-md-2 ">
                                    <button className="form-control" type='button' onClick={() => onAddItemArray()}>
                                        <i className="fa fa-plus"></i></button>
                                </div>

                            </div>
                            <div className="mt-3 col-md-12 col-lg-12 form-group">
                                <label style={{ color: "white" }} className="labels">Daftar Sub Menu Paket</label>
                            </div>
                            <div className='row col-lg-12 col-md-12  form-group'>
                                {_subpaket.length === 0 ? (
                                    <label style={{ color: "#cda45e" }}>Isi sub paket!</label>
                                ) : (
                                    <>

                                        {_subpaket.map((data, i) => (
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
                            <div className="col-lg-12 col-md-12 mt-3 mb-2 form-group">
                                <label style={{ color: "white" }}>Harga</label>
                                <input type="number"
                                    id="harga"
                                    name="harga"
                                    className="form-control"
                                    onChange={(e) => setHarga(e.target.value)}
                                    value={_harga}
                                    placeholder="Harga"

                                />
                                <div className="validate" />
                            </div>
                            <div className="text-center col-lg-12 col-md-12 form-group mt-5 my-5">
                                <button className="book-a-table-btn" type="submit">edit Paket</button>
                                <div className="text-center col-lg-12 col-md-12">
                                    {uploading &&
                                        <>
                                            <div className="lds-ellipsis"><div /><div /><div />
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </section>
        </>
    )
}
