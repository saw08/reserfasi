import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function TambahPaket() {
    let router = useRouter()
    const {
        namamenu,
        harga,
        kategori,
        objectId,
    } = router.query

    //State of Art
    const [_namamenu, setNamamenu] = useState('');
    const [_harga, setHarga] = useState(0);
    const [_kategori, setKategori] = useState(0);




    //Set All
    useEffect(() => {
        if (typeof namamenu == 'string') {
            setNamamenu(namamenu)

        }
        if (typeof harga == 'string') {
            setHarga(harga)
        }
        if (typeof kategori == 'string') {
            setKategori(kategori)
        }
    }, [namamenu,
        harga,
        kategori,
        objectId])

    //UPDATE
    const handlePost = async (e) => {
        e.preventDefault();
        // fields check
        try {
            // Update post
            await fetch('/api/db_menu', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    namamenu: _namamenu,
                    harga: _harga,
                    kategori: _kategori,
                    objectId: objectId
                }),
            });
            // reload the page
            alert('menu sukses diupdate')
            router.push('/admin/tambah-menu');
        } catch (error) {
            // Stop publishing state
        }
    };
    return (
        <section id="events" className="events">
            <div className="container " >
                <div className="section-title">
                    <p>Tambah Data Menu</p>
                </div>
                <form onSubmit={handlePost} >
                    <div className="col-lg-7 col-md-11 p-3" style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.8rem' }} >
                        <div className="form-group mt-2 col-md-12">
                            <label style={{ color: "white" }} htmlFor="exampleFormControlSelect1">Kategori</label><i style={{ color: '#ff0000', fontSize: 'larger' }}>*</i>
                            <select className="form-control form-select" onChange={(e) => setKategori(e.target.value)} value={_kategori} required>
                                <option>--Pilih Kategori--</option>
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
                                value={_namamenu}
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
                                value={_harga}
                                placeholder="Harga"

                            />
                            <div className="validate" />
                        </div>
                        <div className="text-center col-lg-12 col-md-12 form-group mt-5 my-5">
                            <button className="book-a-table-btn" type="submit">Tambah menu</button>
                        </div>
                    </div>

                </form>
            </div>
        </section>
    )
}
