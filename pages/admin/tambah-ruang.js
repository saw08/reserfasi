import { useState } from 'react';
import Ruangan from '../../components/admin/ruangan/ruangan'


export default function Tambahruang() {
    const [namaruang, setNamaruang] = useState('');
    const [kapasitas, setKapasitas] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [foto1, setFoto] = useState([]);
    const [image, setImage] = useState([]);
    const [createObjectURL, setCreateObjectURL] = useState([]);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [uploading, setUploading] = useState(false)
    const clearInput = () => {
        setNamaruang('');
        setKapasitas('');
        setDeskripsi('');
        setFoto('');
        setUploading(false)
    }

    const handlePost = async (e) => {
        e.preventDefault();
        //Uploading
        setUploading(true)
        //Uploading
        const body = new FormData();
        let foto1 = []

        //console.log("file", image)
        for (let i = 0; i < image.length; i++) {
            await body.append("file", image[i]);
            body.append('upload_preset', 'kemarang-images');
            const response = await fetch('https://api.cloudinary.com/v1_1/dlxni4x0g/image/upload', {
                method: "POST",
                body
            }).then(r => r.json());
            await console.log(response)
            await console.log('Secure URL')
            await console.log(response.secure_url)
            foto1.push(response.secure_url)
        }
        //Uploading

        //Cloudinary End

        // reset error and message
        setError('');
        setMessage('');
        clearInput();
        alert("Penambahan Data Sukses")
        // fields check
        if (!deskripsi || !namaruang || !kapasitas || !foto1)
            return setError('isi semua data');
        // post structure
        let ruangan = {
            namaruang,
            kapasitas,
            deskripsi,
            foto1
        };
        // save the post
        let response1 = await fetch('/api/db_ruangan', {
            method: 'POST',
            body: JSON.stringify(ruangan),
        });
        // get the data
        let data = await response1.json();
        if (data.success) {
            // reset the fields
            setNamaruang('');
            setKapasitas('');
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
            if (foto1.length === 0) {
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
                                <input type="text"
                                    name="deskripsi"
                                    className="form-control"
                                    placeholder="deskripsi"
                                    onChange={(e) => setDeskripsi(e.target.value)}
                                    value={deskripsi}
                                />
                                <div className="validate" />

                            </div>

                            <div className="text-center col-lg-6 col-md-10 form-group mt-3 mt-5">
                                <button className="book-a-table-btn" type="submit"  disabled={uploading === false ? (false) : (true)}>Tambah Ruangan</button>
                            </div>

                        </div>

                    </form>
                </div>
            </section>
            <Ruangan></Ruangan>
        </>
    )
}
