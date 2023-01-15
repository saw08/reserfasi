import { useState } from 'react';

export default function TambahPaket() {
    const [namapaket, setNamapaket] = useState('');
    const [pakettemp, setPakettemp] = useState('');
    const [subpaket, setSubpaket] = useState([]);
    const [harga, setHarga] = useState(0);
    const [foto, setFoto] = useState([]);
    const [image, setImage] = useState([]);
    const [createObjectURL, setCreateObjectURL] = useState([]);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [uploading, setUploading] = useState(false)
    const clearInput = () => {
        setNamapaket('');
        setSubpaket([]);
        setPakettemp('');
        setHarga('');
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
        if (!subpaket || !namapaket || !harga || !foto)
            return setError('isi semua data');
        // post structure
        let paket = {
            namapaket,
            subpaket,
            harga,
            foto
        };
        // save the post
        let response1 = await fetch('/api/db_paket', {
            method: 'POST',
            body: JSON.stringify(paket),
        });
        // get the data
        let data = await response1.json();
        if (data.success) {
            // reset the fields
            setNamapaket('');
            setSubpaket('');
            setHarga('');
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
        setSubpaket(subpaket => [...subpaket, pakettemp]);
        setPakettemp('')
        console.log(subpaket)
    };

    const removeItemArray = (data) => {
        var index = subpaket.indexOf(data)
        if (index >= 0) {
            if (subpaket.length === 0) {
                setSubpaket([])
            } else {
                setSubpaket(subpaket => [...subpaket.slice(0, index), ...subpaket.slice(index + 1)])
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
        var index = foto.indexOf(data)
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
        <section id="events" className="events">
            <div className="container " >
                <div className="section-title mt-4">
                    <h2>psket</h2>
                    <p>Tambah data Paket</p>
                </div>
                <form onSubmit={handlePost} >
                    <div className="col-lg-7 col-md-11 p-3" style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.8rem' }} >
                        <div className="mt-2 col-lg-12 col-md-12">
                            {foto.length === 0 ? (
                                <h4>Daftar Foto</h4>
                            ) : (
                                <>

                                    {foto.map((data, i) => (
                                        <>
                                            <div className='cols-2 mt-3 mb-3 row row-cols-2'>
                                                <div className='col-lg-6 col-md-8'>
                                                    <img id='image' className='img-fluid d-block border border-dark' width={300} height={300} src={createObjectURL[i]} />
                                                </div>
                                                <div className='col-2 col-md-2'>
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
                        <div className="col-lg-12 col-md-12 form-group mt-3">
                            <label style={{ color: "white" }}>Foto Paket(dapat di isi 3 foto)</label>
                            <input type="file" className="form-control" name="myImage" onChange={uploadToClient} />
                        </div>
                        <div className="col-lg-12 col-md-12 mt-3 form-group">
                            <label style={{ color: "white" }}>Nama Paket</label>
                            <input type="text"
                                id="namapaket" name="namapaket"
                                className="form-control"
                                placeholder="Nama Paket"
                                onChange={(e) => setNamapaket(e.target.value)}
                                value={namapaket}
                            />
                            <div className="validate" />
                        </div>
                        <div className="row col-lg-12 col-md-12 mt-3 form-group">
                            <label style={{ color: "white" }}>Nama Hiburan</label>
                            <div className="col-lg-10 col-md-10 ">
                                <input type="text" className="form-control"
                                    id="subtemp"
                                    name="subtemp"
                                    value={pakettemp}
                                    onChange={(e) => setPakettemp(e.target.value)}
                                />
                            </div>
                            <div className="col-lg-2 col-md-2 ">
                                <button className="form-control" type='button' onClick={() => onAddItemArray()}>
                                    <i className="fa fa-plus"></i></button>
                            </div>

                        </div>
                        <div className="mt-3 col-md-12 col-lg-12 form-group">
                            <label style={{ color: "white" }} className="labels">Daftar Sub Hiburan</label>
                        </div>
                        <div className='row col-lg-12 col-md-12 mt-3 form-group'>
                            {subpaket.length === 0 ? (
                                <label style={{ color: "white" }}>Isi Sub Hiburan</label>
                            ) : (
                                <>

                                    {subpaket.map((data, i) => (
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
                        <div className="col-lg-12 col-md-12 mt-3 form-group">
                            <label style={{ color: "white" }}>Harga</label>
                            <input type="number"
                                id="harga"
                                name="harga"
                                className="form-control"
                                onChange={(e) => setHarga(e.target.value)}
                                value={harga}
                                placeholder="Harga"

                            />
                            <div className="validate" />
                        </div>
                        <div className="text-center col-lg-12 col-md-12 form-group mt-5 my-5">
                            <button className="book-a-table-btn" type="submit">Tambah Paket</button>
                        </div>
                    </div>

                </form>
            </div>
        </section>
    )
}
