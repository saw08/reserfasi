import Pesanan from '../../components/admin/cardpesanan'


export default function Homeadmin() {
    return (
        <div>
            <div>
                {/* ======= Hero Section ======= */}
                <section id="hero" className="d-flex align-items-center">
                    <div className="container position-relative text-center text-lg-start"   >
                            <section id="book-a-table">
                                <div className="container" >
                                <div className="row text-white p-3 bg-dark text-center">
                                    <div className='p-2 col-lg-4 '>
                                        <div className=" p-2" style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.3rem' }}>
                                                <a style={{ textDecoration: 'none', color: 'white' }} href="/admin/pesanan" >
                                                    <div className="section-title">
                                                        <p style={{ fontSize: '22px' }}>Pesanan</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    <div className='p-2 col-lg-4 '>
                                        <div className=" p-2" style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.3rem' }}>
                                                <a style={{ textDecoration: 'none', color: 'white' }} href="/admin/tambah-paket" >
                                                    <div className="section-title">
                                                        <p style={{ fontSize: '22px' }}> paket</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    <div className='p-2 col-lg-4'>
                                        <div className=" p-2" style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.3rem' }}>
                                            <a style={{ textDecoration: 'none', color: 'white' }} href="/admin/tambah-ruang" >
                                                <div className="section-title">
                                                    <p style={{ fontSize: '22px' }}> ruang</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='p-2 col-lg-4 '>
                                        <div className=" p-2" style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.3rem' }}>
                                            <a style={{ textDecoration: 'none', color: 'white' }} href="/admin/tambah-album" >
                                                <div className="section-title">
                                                    <p style={{ fontSize: '22px' }}> Album</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='p-2 col-lg-4 '>
                                        <div className=" p-2" style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.3rem' }}>
                                            <a style={{ textDecoration: 'none', color: 'white' }} href="/admin/data-pesanan" >
                                                <div className="section-title">
                                                    <p style={{ fontSize: '22px' }}>Data Pesanan</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </section>
                    </div>
                </section>{/* End Hero */}
                <main id="main">
                    {/* ======= Gallery Section ======= */}
                    <section id="gallery" className="gallery">
                        <div className="container" >
                            <div className="row row-cols-1 row-cols-md-2     text-white p-3">
                                <Pesanan></Pesanan>
                                <Pesanan></Pesanan>
                                <Pesanan></Pesanan>
                            </div>
                        </div>
                    </section>{/* End Gallery Section */}
                   
                </main>
            </div>

        </div>

    )
}
