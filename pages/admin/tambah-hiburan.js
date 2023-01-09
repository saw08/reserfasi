 function Tambahhiburan() {
    return (
        <>
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
            <section id="events" className="events">
                <div className="container" >
                    <div className="section-title">
                        <h2>Reservation</h2>
                        <p>Lengkapi Data Reserfasi</p>
                    </div>
                    <form>
                        <div className="row col-lg-12">
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
        </>
    )
}
export default Tambahhiburan;