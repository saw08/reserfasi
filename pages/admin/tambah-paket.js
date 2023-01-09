import { useState } from 'react';

function Tambahpaket() {
    const [namaruang, setNamaruang] = useState('');
    const [kapasitas, setKapasitas] = useState('');
    const [kategori, setKategori] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [fotom, setFotom] = useState([]);
    const [image, setImage] = useState([]);
    const [createObjectURL, setCreateObjectURL] = useState([]);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [uploading, setUploading] = useState(false)
    const clearInput = () => {
        setNamaruang('');
        setKategori('');
        setKapasitas('');
        setDeskripsi('');
        setFoto([]);
        setUploading(false)
    }

    const handlePost = async (e) => {
        e.preventDefault();
        //Uploading
        setUploading(true)
        //Uploading
        body.append("file", image);
        body.append('upload_preset', 'kemarang-images');
        const response = await fetch('https://api.cloudinary.com/v1_1/dlxni4x0g/image/upload', {
            method: 'POST',
            body
        }).then(r => r.json());
        let fotom = response.secure_url
        //Uploading
        setUploading(true)
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
            kategori,
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
            setFotom('');
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
            const i = event.target.files[0];
            setFotom(i.name)
            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };
    return (
        <>
            <section id="events" className="events">
                <div className="container" >
                    <div className="section-title">
                        <h2>Reservation</h2>
                        <p>Lengkapi Data Reserfasi</p>
                    </div>
                    <form >
                        <div className="col-lg-12">
                            <div className="col-lg-6 col-md-10 form-group mt-3">
                                <label style={{ color: "white" }}>Gambar</label>
                                <input type="file" className="form-control" placeholder="Date" />
                            </div>
                            <div className="col-lg-6 col-md-10 mt-3 form-group">
                                <label style={{ color: "white" }}>Nama Ruangan</label>
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-6 col-md-10 form-group mt-3">
                                <label style={{ color: "white" }}>Deskripsi</label>
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate" />
                            </div>
                            <div className="text-center col-lg-10 col-md-10 form-group mt-3 mt-5">
                                <button className="book-a-table-btn" type="submit">Tambah Ruangan</button>
                            </div>
                        </div>

                    </form>
                </div>
            </section>
            <section id="menu" className="menu section-bg">
                <div className="container" >
                    <div className="section-title">
                        <h2>Menu</h2>
                        <p>Check Our Tasty Menu</p>
                    </div>
                    <div className="row" data-aos="fade-up" data-aos-delay={100}>
                    </div>
                    <div className="row menu-container" >
                        <div className="col-lg-4 menu-item filter-starters bordermenu">
                            <img src="../menu/lobster-bisque.jpg" className="menu-img" alt />
                            <div className="menu-content">
                                <a href="#">Paket</a><span>60 Pak</span>
                            </div>
                            <div className="menu-ingredients">
                                <ul>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Tambahpaket;
