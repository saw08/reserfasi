import Head from 'next/head'
import Image from 'next/image'
import Ruangan from '../components/home/ruangan'
import Menu from '../components/home/menu'

export default function Home() {
  return (
    <div>
      <div>
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex align-items-center">
          <div className="container position-relative text-center text-lg-start mb-5"   >
            <div className="row mb-5">
              <div className="col-lg-8">
                <h1>TERSDITIONAL  <span>CUISINE</span></h1>
                <h1>&  <span>DANCE</span></h1>
                <div className="btns">
                  <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
                  <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Book a Table</a>
                </div>
              </div>
              {/* <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative " data-aos="zoom-in" data-aos-delay={200}>
                <a href="https://www.youtube.com/api sport" className="glightbox play-btn" />
              </div> */}
            </div>
          </div>
        </section>{/* End Hero */}
        <div className=" sticky-top bg-dark">
          <div className="text-center form-group p-3">
            <a href='/pesan' type='btn' className='btn-rs' style={{ textDecoration: 'none', color: 'white' }}>
              <b style={{ marginTop: '3px' }}>Mulai Reservasi sekarang</b>
              <i className="fa fa-hand-o-right" style={{ fontSize: '22px', paddingLeft: '2px' }} />
            </a>
          </div>
        </div>

        <main id="main">

          <div className='bg-dark'>
            <Ruangan></Ruangan>
          </div>
          {/* ======= Specials Section ======= */}
          <section id="specials" className="specials">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <p>Hiburan</p>
              </div>
              <div className="row" >
                <div className="tab-pane" id="tab-5">
                  <div className="row">
                    {/* <div className="col-lg-6 details order-2 ">
                      <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                      <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                      <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                    </div> */}
                    <div className='col-lg-4 col-sm-6'>
                      <div className="profile-card-6">
                      <img src="1.jpg" className="img img-fluid" />
                        <div className="profile-name">Hiburan 1</div>
                        <div className="profile-position">Lorem Ipsum Donor</div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-sm-6'>
                      <div className="profile-card-6">
                        <img src="2.jpg" className="img img-fluid" />
                        <div className="profile-name">Hiburan 2</div>
                        <div className="profile-position">Lorem Ipsum Donor</div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-sm-6'>
                      <div className="profile-card-6">
                        <img src="3.jpg" className="img img-fluid" />
                        <div className="profile-name">JOHN
                          <br />DOE</div>
                        <div className="profile-position">Lorem Ipsum Donor</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Specials Section */}
          <Menu></Menu>
          {/* ======= Gallery Section ======= */}
          <section id="gallery" className="gallery">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Gallery Warung kemarang</h2>
              </div>
            </div>
            <div className="container-fluid" data-aos="fade-up" data-aos-delay={100}>
              <div className="row g-0">
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="./1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="./1.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="./1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="./1.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="./1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="./1.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="./1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="./1.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="./1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="./1.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="./1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="./1.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="./1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="./1.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="./1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                      <img src="./1.jpg" alt className="img-fluid" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Gallery Section */}
          <div >
            <iframe loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ border: 0, width: '100%', height: 350 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.1102734608025!2d114.30029681415911!3d-8.191645584411468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd14fa43f67e175%3A0x4421e42a251f45b!2sWaroeng%20Kemarang!5e0!3m2!1sid!2sid!4v1673239592604!5m2!1sid!2sid" frameBorder={0} allowFullScreen />
          </div>
          <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <p>Lokasi warung kemarang</p>
              </div>
            </div>
            <div >
              <iframe loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ border: 0, width: '100%', height: 350 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.1102734608025!2d114.30029681415911!3d-8.191645584411468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd14fa43f67e175%3A0x4421e42a251f45b!2sWaroeng%20Kemarang!5e0!3m2!1sid!2sid!4v1673239592604!5m2!1sid!2sid" frameBorder={0} allowFullScreen />
            </div>
          </section>

        </main>
      </div>
    </div>

  )
}
