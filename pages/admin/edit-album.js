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
    const [_deskripsi, setDeskripsi] = useState('');
    const [_foto, setFoto] = useState([]);
    const [image, setImage] = useState([]);
    const [createObjectURL, setCreateObjectURL] = useState([]);
    const [uploading, setUploading] = useState(false)
    const [_gambarNew, setGambarNew] = useState([]);

    
    useEffect(() => {
        if (typeof foto == 'string') {
            setFoto(foto)
        }
        if (typeof deskripsi == 'string') {
            setDeskripsi(deskripsi)
        }
    }, [
        foto,
        deskripsi,
        objectId,])

    //UPDATE
    const handlePost = async (e) => {
        e.preventDefault();
        setUploading(true)

        //Cloudinary Update
        const body = new FormData();
        body.append("file", image);
        body.append('upload_preset', 'kemrangimg');
        const response = await fetch('https://api.cloudinary.com/v1_1/perpus/image/upload', {
            method: 'POST',
            body
        }).then(r => r.json());
        foto = response.secure_url
        // fields check
        try {
            // Update post
            await fetch('/api/db_album', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    deskripsi: _deskripsi,
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
                        <h2>Reservation</h2>
                    </div>
                    <form onSubmit={handlePost} >
                        <div className=" col-lg-12">
                            <div className="col-lg-6 col-md-10 form-group mt-3">
                                <div className="col-6   ">
                                    <img src={createObjectURL} className='img img-fluid' style={{ width: '30', height: '20' }} />
                                </div>
                                <label style={{ color: "white" }}>Gambar</label>
                                <input type="file" className="form-control" name="myImage" onChange={uploadToClient} />
                            </div>
                            <div className="col-lg-6 col-md-10 mt-3 form-group">
                                <label style={{ color: "white" }}>Deskripsi album </label>
                                <textarea type="text"
                                    name="deskripsi"
                                    className="form-control"
                                    placeholder="deskripsi"
                                    onChange={(e) => setDeskripsi(e.target.value)}
                                    value={_deskripsi}
                                />
                                <div className="validate" />
                            </div>

                            <div className="text-center col-lg-6 col-md-10 form-group mt-3 mt-5">
                                <button className="book-a-table-btn" type="submit" disabled={uploading === false ? (false) : (true)}>Tambah Album</button>
                                <div className="text-center col-lg-6 col-md-10">
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
