export default function Tambahpaket() {
    return (
        <>
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
            <section id="events" className="events">
                <div className="container" >
                    <div className="section-title">
                        <h2>Reservation</h2>
                        <p>Lengkapi Data Reserfasi</p>
                    </div>
                    <form >
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
