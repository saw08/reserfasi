import { useState } from 'react';

export default function Tambahhiburan() {
    const [namahiburan, setNamahiburan] = useState('');
    const [subtemp, setSubtemp] = useState('');
    const [subhiburan, setSubhiburan] = useState([]);
    const [harga, setHarga] = useState(0);
    const [deskripsi, setDeskripsi] = useState('');
    const [foto, setFoto] = useState([]);
    const [image, setImage] = useState([]);
    const [createObjectURL, setCreateObjectURL] = useState([]);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [uploading, setUploading] = useState(false)
    const clearInput = () => {
        setNamahiburan('');
        setSubhiburan([]);
        setHarga('');
        setDeskripsi('');
        setFoto([]);
        setUploading(false)
    }

    const handlePost = async (e) => {
        e.preventDefault();
        //Uploading
        setUploading(true)
        //Uploading
        const body = new FormData();
        let foto = []

        //console.log("file", image)
        for (let i = 0; i < image.length; i++) {
            await body.append("file", image[i]);
            body.append('upload_preset', 'kemarang-images');
            const response = await fetch('https://api.cloudinary.com/v1_1/dlxni4x0g/image/upload', {
                method: "POST",
                body
            }).then(r => r.json());
            // await console.log(response)
            // await console.log('Secure URL')
            // await console.log(response.secure_url)
            foto.push(response.secure_url)
        }
        //Uploading

        //Cloudinary End

        // reset error and message
        setError('');
        setMessage('');
        clearInput();
        alert("Penambahan Data Sukses")
        // fields check
        if (!deskripsi || !subhiburan || !namahiburan || !harga || !foto)
            return setError('isi semua data');
        // post structure
        let hiburan = {
            namahiburan,
            subhiburan,
            harga,
            deskripsi,
            foto
        };
        // save the post
        let response1 = await fetch('/api/db_hiburan', {
            method: 'POST',
            body: JSON.stringify(hiburan),
        });
        // get the data
        let data = await response1.json();
        if (data.success) {
            // reset the fields
            setNamahiburan('');
            setSubhiburan('');
            setHarga('');
            setDeskripsi('');
            setFoto('');
            //setImage(null)
            setCreateObjectURL(null);
            // set the message
            return setMessage(data.message);

        }
        else {
            // set the error
            return setError(data.message);
        }

    };
    const onAddItemArray = () => {
        setSubhiburan(subhiburan => [...subhiburan, subtemp]);
        setSubtemp('')
        console.log(subhiburan)

    };

    const removeItemArray = (data) => {
        var index = subhiburan.indexOf(data)
        if (index >= 0) {
            if (subhiburan.length === 0) {
                setSubhiburan([])
            } else {
                setSubhiburan(subhiburan => [...subhiburan.slice(0, index), ...subhiburan.slice(index + 1)])
            }
        }
    };
    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            var x = document.getElementById("image");

            const i = event.target.files[0];
            setFoto(array => [...array, i.name])
            setImage(array => [...array, i]);
            setCreateObjectURL(array => [...array, URL.createObjectURL(i)]);
        }
    };
    const removeItemArrayGambar = (data) => {
        var index = foto1.indexOf(data)
        if (index >= 0) {
            if (foto.length === 0) {
                setFoto([])
                setImage([])
                setCreateObjectURL([])
            } else {
                setFoto(array => [...array.slice(0, index), ...array.slice(index + 1)])
                setImage(array => [...array.slice(0, index), ...array.slice(index + 1)])
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
                                {foto.length === 0 ? (
                                    <h4>Daftar Foto</h4>
                                ) : (
                                    <>

                                        {foto.map((data, i) => (
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
                                    value={namahiburan}
                                />
                                <div className="validate" />
                            </div>
                            <div className=" col-lg-6 col-md-10 mt-3 form-group">
                                <label style={{ color: "white" }}>Nama Hiburan</label>
                                <div className="btn-grup ">
                                    <input type="text" className="form-control"
                                        id="subtemp"
                                        name="subtemp"
                                        value={subtemp}
                                        onChange={(e) => setSubtemp(e.target.value)}
                                    />
                                    <button className="form-control" type='button' onClick={() => onAddItemArray()}>
                                        <i className="fa fa-plus"></i></button>
                                </div>

                            </div>
                            <div className="mt-3 col-md-12"><label className="labels">Daftar Sub Hiburan</label>
                            </div>
                            <div>
                                {subhiburan.length === 0 ? (
                                    <h6>Isi Sub Hiburan</h6>
                                ) : (
                                    <>

                                        {subhiburan.map((data, i) => (
                                            <div className="btn-group col-md-12">
                                                <input type="text" id={i} className="form-control col-10 mt-2 col-md-10" value={data} readOnly />
                                                <button className="form-control col-2 mt-2 col-sm-2" type='button'
                                                    onClick={() => removeItemArray(data)}
                                                >
                                                    <i className="fa fa-trash"></i></button>
                                            </div>
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
                                    value={harga}
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
                                    value={deskripsi}
                                />
                                <div className="validate" />
                            </div>
                            <div className="text-center col-lg-6 col-md-10 form-group mt-5">
                                <button className="book-a-table-btn" type="submit">Tambah Hiburan</button>
                            </div>
                        </div>

                    </form>
                </div>
            </section>
            <section className="section-bg">
                <div className="container" >
                    <div className="section-title text-center">
                        <p style={{ fontSize: '28px' }}>ruangan</p>
                    </div>
                    <div className="row text-white">
                        <div className="col-lg-4">
                            <a style={{ textDecoration: 'none', color: 'white' }} href="../../pesan" >
                                <div className="gallery-item">
                                    <img src="../1.jpg" alt className="img-fluid" />
                                </div>
                                <div className="box ">
                                    <span>01</span>
                                    <h4>Ruangan</h4>
                                    <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <a style={{ textDecoration: 'none', color: 'white' }} href="../../pesan">
                                <div className="gallery-item">
                                    <img src="../1.jpg" alt className="img-fluid" />
                                </div>
                                <div className="box" >
                                    <span>02</span>
                                    <h4>Ruangan</h4>
                                    <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <a style={{ textDecoration: 'none', color: 'white' }} href="../../pesan">
                                <div className="gallery-item">
                                    <img src="../1.jpg" alt className="img-fluid" />
                                </div>
                                <div className="box" >
                                    <span>03</span>
                                    <h4> Ruangan</h4>
                                    <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
