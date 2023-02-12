import Head from 'next/head'
import Image from 'next/image'
import Ruangan from '../components/home/ruangan/ruangan'
import Album from '../components/home/album/album'
import Hiburan from '../components/home/hiburan/hiburan'
import Menu from '../components/home/menupaket/menumap'
import Paket from '../components/home/menupaket/paketmap'
// MONGODB_URI = "mongodb://127.0.0.1:27017"

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
                  <a href="#menu" className="btn-menu animated fadeInUp scrollto">Menu</a>
                  <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Reservasi</a>
                </div>
              </div>
              {/* <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative " data-aos="zoom-in" data-aos-delay={200}>
                <a href="https://www.youtube.com/api sport" className="glightbox play-btn" />
              </div> */}
            </div>
          </div>
        </section>{/* End Hero */}
        
        <div className='bg-dark'>
          <div className=" sticky-top ">
            <div className="text-center form-group pt-5">
              <a href='/pesan' type='btn' className='btn-rs ' style={{ textDecoration: 'none', color: 'white' }}>
                <b style={{ marginTop: '3px' }}>  Reservasi sekarang</b>
                <i className="fa fa-hand-o-right" style={{ fontSize: '22px', paddingLeft: '1px' }} />
              </a>
            </div>
          </div>
          <Ruangan />
          <Paket />
          <Menu />
          <Hiburan />
          <Album />
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

      </div>
      
    </div>

  )
}
