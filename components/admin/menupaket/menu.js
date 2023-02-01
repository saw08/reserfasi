import { useState } from 'react';
import rupiah from '../../components/Rupiah';


export default function TambahPaket() {
    const [namamenu, setNamamenu] = useState('');
    const [harga, setHarga] = useState(0);
    const [kategori, setKategori] = useState(0);
    // const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [uploading, setUploading] = useState(false)
    const clearInput = () => {
        setNamamenu('');
        setHarga(0);
        setKategori('');
    }

    const handlePost = async (e) => {
        e.preventDefault();
        // let imageUrl = ''
        // //Uploading
        // setUploading(true)
        // //Uploading
        // const body = new FormData();
        // //console.log("file", image)
        // body.append("file", image);
        // body.append('upload_preset', 'kemarang-images');
        // const response = await fetch('https://api.cloudinary.com/v1_1/dlxni4x0g/image/upload', {
        //     method: 'POST',
        //     body
        // }).then(r => r.json());
        // let foto = response.secure_url
        // //Uploading
        // setUploading(true)
        // //Cloudinary End

        // reset error and message
        setError('');
        setMessage('');
        clearInput();
        alert("Penambahan Data Sukses")
        // fields check
        if (!namamenu || !harga)
            return setError('All fields are required');
        // post structure
        let menu = {
            namamenu,
            harga,
            kategori
        };
        // save the post
        let response1 = await fetch('/api/db_menu', {
            method: 'POST',
            body: JSON.stringify(menu),
        });
        // get the data
        let data = await response1.json();
        if (data.success) {
            // reset the fields
            setNamamenu('');
            setHarga(0);
            setKategori('');
            //setImage(null)
            setCreateObjectURL(null);
            // set the message
            return setMessage(data.message);
        }
        else {
            // set the error
            console.log(data.message);
            return setError(data.message);
        }
    };
    // const uploadToClient = (event) => {
    //     if (event.target.files && event.target.files[0]) {
    //         const i = event.target.files[0];
    //         setFoto(i.name)
    //         setImage(i);
    //         setCreateObjectURL(URL.createObjectURL(i));
    //     }
    // };

    return (
        <section id="events" className="events">
            <div className="container " >
                <div className="section-title">
                    <p>Tambah data menu</p>
                </div>
                <form onSubmit={handlePost} >
                    <div className="col-lg-7 col-md-11 p-3" style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.8rem' }} >
                        <div className="form-group mt-2 col-md-12">
                            <label style={{ color: "white" }} htmlFor="exampleFormControlSelect1">Kategori</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                            <select className="form-control form-select" onChange={(e) => setKategori(e.target.value)} required>
                                <option>--Pilih Kategri--</option>
                                <option value={'makananutama'}>Makanan utama</option>
                                <option value={'laukpauk'}>Lauk Pauk</option>
                                <option value={'sayursambal'}>Sayur & Sambal</option>
                                <option value={'minuman'}>Minuman</option>
                                <option value={'kuesnack'}>Kue & Snack</option>
                            </select>
                        </div>
                        <div className="col-lg-12 col-md-12 mt-3 form-group">
                            <label style={{ color: "white" }}>Nama Menu</label>
                            <input type="text"
                                id="namamenu" name="namamenu"
                                className="form-control"
                                placeholder="Nama Menu"
                                onChange={(e) => setNamamenu(e.target.value)}
                                value={namamenu}
                            />
                            <div className="validate" />
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
