export default function Tambahpaket() {

    const [namaruang, setNamaruang] = useState('');
    const [kategori, setKategori] = useState('');
    const [kapasitas, setKapasitas] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [foto, setFoto] = useState([]);
    const [image, setImage] = useState([]);
    const [createObjectURL, setCreateObjectURL] = useState([]);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [uploading, setUploading] = useState(false)
    const clearInput = () => {
        setNamaruang('');
        setKapasitas('');
        setKategori('');
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
        if (!deskripsi || !kategori || !namaruang || !kapasitas || !foto)
            return setError('isi semua data');
        // post structure
        let ruangan = {
            namaruang,
            kategori,
            kapasitas,
            deskripsi,
            foto
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
            setKategori('');
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
            const i = event.target.files[0];
            setFoto(i.name)
            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };

    return (
        <>
            <section id="events" className="events">
                <div className="container" >
                    <div className="section-title">
                            <h2>menu paket</h2>
                        <p>Tambah Menu Paket</p>
                    </div>
                    <form >
                        <div className=" col-lg-12">
                            <div className="col-lg-6 col-md-10 form-group mt-3">
                                <div className="col-6   ">
                                    <img src={createObjectURL} className='img img-fluid' style={{ width: '30', height: '20' }} />
                                </div>
                                <label style={{ color: "white" }}>Gambar</label>
                                <input type="file" className="form-control" name="myImage" onChange={uploadToClient} />
                            </div>
                            <div className="col-lg-6 col-md-10 mt-3 form-group">
                                <label style={{ color: "white" }}>Nama Ruangan</label>
                                <input type="text"
                                    id="validatedCustomFile" name="myImage"
                                    className="form-control"
                                    placeholder="Nama ruangan"
                                    onChange={(e) => setNamaruang(e.target.value)}
                                    value={namaruang}
                                />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-6 col-md-10 form-group mt-3">
                                <label style={{ color: "white" }}>Kategori</label>
                                <select className="form-control form-select" onChange={(e) => setKategori(e.target.value)} required>
                                    <option>--Pilih Kategori--</option>
                                    <option value={'paket'}>paket</option>
                                    <option value={'alakart'}>alakart</option>
                                </select>
                            </div>
                            <div className="col-lg-6 col-md-10 form-group mt-3">
                                <label style={{ color: "white" }}>Deskripsi</label>
                                <input type="text"
                                    id="validatedCustomFile" name="myImage"
                                    className="form-control"
                                    placeholder="Nama ruangan"
                                    onChange={(e) => setNamaruang(e.target.value)}
                                    value={namaruang}
                                />
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
                        <p>Daftar Menu</p>
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
