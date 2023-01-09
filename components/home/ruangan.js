export default function ruangan({ props }) {

    return (

        <section id="book-a-table">
            <div className="container" >
                {/* <div className="section-title text-center">
                    <p style={{fontSize:'28px'}}>Mulai Reserfasi Sekarang</p>
                </div> */}
                <div className="section-title">
                    <p style={{ fontSize: '22px' }}>Ruangan</p>
                </div>
                <div className="row text-white">
                    <div className='p-2 col-lg-4 '>
                        <div style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.3rem' }}>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="../../pesan" >
                            <div className="gallery-item" >
                                    <img src="../1.jpg" alt="..." className="img-fluid" />
                            </div>
                            <div className="box p-2">
                            <span>01</span>
                                <h4>Ruangan</h4>
                                    <p>Kapasitas 50 orang</p>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className='p-2 col-lg-4 '>
                        <div style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.3rem' }}>
                        <a style={{ textDecoration: 'none', color:'white' }} href="../../pesan">
                                <div className="gallery-item" >
                                    <img src="../2.jpg" alt="..." className="img-fluid" />
                            </div>
                            <div className="box p-2" >
                            <span>02</span>
                                <h4>Ruangan</h4>
                                    <p>Kapasitas 50 orang</p>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className='p-2 col-lg-4 '>
                    <div  style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.3rem' }}>
                        <a style={{ textDecoration: 'none', color: 'white' }}  href="../../pesan">
                                <div className="gallery-item" >
                                    <img src="../3.jpg" alt="..." className="img-fluid" />
                            </div>
                            <div className="box p-2" >
                            <span>03</span>
                                <h4> Ruangan</h4>
                                <p>Kapasitas 50 orang</p>
                            </div>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
