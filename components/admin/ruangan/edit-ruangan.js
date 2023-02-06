import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Editruangan() {
    let router = useRouter()
    const {
        namaruang,
        kapasitas,
        foto1,
        kategori,
        deskripsi,
    } = router.query

    //State of Art
    const [_namaruang, setNamaruang] = useState('');
    const [_kategori, setKategori] = useState('');
    const [_kapasitas, setKapasitas] = useState('');
    const [_deskripsi, setDeskripsi] = useState('');
    const [_foto1, setFoto] = useState([]);

    //Set All
    useEffect(() => {
        if (typeof namaruang == 'string') {
            setNama(namaruang)

        }
        if (typeof kapasitas == 'string') {
            setNoWa(kapasitas)
        }
        if (typeof kategori == 'string') {
            setNoWa(kategori)
        }
        if (typeof deskripsi == 'string') {
            setNoWa(deskripsi)
        }
        if (typeof foto1 == 'string') {
            setTim(Object.assign(_tim, JSON.parse(foto1)))
        }
    }, [namaruang,
        kapasitas,
        foto1,
        kategori,
        deskripsi,
        objectId])

    const onAddItemArray = () => {
        setTim(_tim => [..._tim, timTemp]);
        setTimTemp('')
        console.log(_tim)

    };

    const removeItemArray = (data) => {
        var index = _tim.indexOf(data)
        if (index >= 0) {
            if (_tim.length === 0) {
                setTim([])
            } else {
                setTim(_tim => [..._tim.slice(0, index), ..._tim.slice(index + 1)])
            }
        }
    };
    //UPDATE
    const handlePost = async (e) => {
        e.preventDefault();
        setCheck();
        setUploading(true)

        //Cloudinary Update
        const body = new FormData();
        let imageUrl = []

        body.append('upload_preset', 'my-uploads');
        //console.log("file", image)
        for (let i = 0; i < image.length; i++) {
            await body.append("file", image[i]);
            const response = await fetch('https://api.cloudinary.com/v1_1/api-sport/image/upload', {
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
        for (let i = 0; i < _gambar.length; i++) {
            imageUrl.push(_gambar[i])
        }
        setGambar(Object.assign(_gambar, imageUrl))
        //Uploading
        if (imageUrl.length != 0) {
            setUploading(false)
        }
        // fields check
        try {
            // Update post
            await fetch('/api/profildb', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nama: _nama,
                    noWa: _noWa,
                    tim: _tim,
                    objectId: objectId,
                }),
            });
            // reload the page
            alert('ruangan sukses diupdate')
            router.push('/tambah-ruang');
        } catch (error) {
            // Stop publishing state
            console.log('Not Working')
        }
    };
    return (
        <>
            <section id="events" className="events">
                <div className="container" >
                    <div className="section-title">
                        <h2>Tambah ruangan</h2>
                    </div>
                    <form onSubmit={handlePost} >
                        <div className=" col-lg-12">
                            <div className="mt-2 col-lg-6 col-md-10">
                                {foto1.length === 0 ? (
                                    <h4>Daftar Foto</h4>
                                ) : (
                                    <>

                                        {foto1.map((data, i) => (
                                            <>
                                                <div className='cols-2 mt-3 mb-3 row row-cols-2'>
                                                    <div className='col-10 col-md-10'>
                                                        <img id='image' className='img-fluid d-block border border-dark' width={300} height={300} src={createObjectURL[i]} />
                                                    </div>
                                                    <div className='col-10 col-md-2'>
                                                        <button className="form-control"
                                                            onClick={() => removeItemArrayGambar(data)}
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
                                <label style={{ color: "white" }}>Foto ruangan (dapat di isi 3 foto)</label>
                                <input type="file" className="form-control" name="myImage" onChange={uploadToClient} />
                            </div>
                            <div className="col-lg-6 col-md-10 form-group mt-3">
                                <label style={{ color: "white" }}>Kategori</label>
                                <select className="form-control form-select" onChange={(e) => setKategori(e.target.value)} required>
                                    <option>--Pilih Kategori--</option>
                                    <option value={'ruangan'}>Ruangan</option>
                                    <option value={'pondok'}>pondok</option>
                                </select>
                            </div>
                            <div className="col-lg-6 col-md-10 mt-3 form-group">
                                <label style={{ color: "white" }} htmlFor="validatedCustomFile">Nama ruang </label>
                                <input type="text"
                                    id="validatedCustomFile" name="myImage"
                                    className="form-control"
                                    placeholder="Nama ruangan"
                                    onChange={(e) => setNamaruang(e.target.value)}
                                    value={namaruang}
                                />
                                <div className="validate" />

                            </div>
                            <div className="col-lg-6 col-md-10 mt-3 form-group">
                                <label style={{ color: "white" }}>Kapasitas</label>
                                <input type="number"
                                    name="kapasitas"
                                    className="form-control"
                                    placeholder="kapasitas"
                                    onChange={(e) => setKapasitas(e.target.value)}
                                    value={kapasitas}
                                />
                                <div className="validate" />

                            </div>
                            <div className="col-lg-6 col-md-10 mt-3 form-group">
                                <label style={{ color: "white" }}>Deskripsi</label>
                                <textarea type="formcontrol"
                                    name="deskripsi"
                                    className="form-control"
                                    placeholder="deskripsi"
                                    onChange={(e) => setDeskripsi(e.target.value)}
                                    value={deskripsi}
                                />
                                <div className="validate" />

                            </div>

                            <div className="text-center col-lg-6 col-md-10 form-group mt-3 mt-5">
                                <button className="book-a-table-btn" type="submit" disabled={uploading === false ? (false) : (true)}>Tambah Ruangan</button>
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
            <Ruangan></Ruangan>
        </>
    )
}
