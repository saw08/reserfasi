import useSWR from 'swr'
import { useState } from 'react'
import moment from 'moment'
//@ts-check

export default function Pesan() {
    const [jadwalPesan, setJadwalPesan] = useState([]);
    const [ruanganPesan, setRuanganPesan] = useState([]);
    const [hiburanPesan, setHiburanPesan] = useState([]);
    const [namaPemesan, setNamaPemesan] = useState('');
    const [email, setEmail] = useState('');
    const [noKontak, setNoKontak] = useState([]);
    const [tglBooking, setTglBooking] = useState('');
    const [jumlahOrang, setJumlahOrang] = useState('');
    const [foto, setFoto] = useState([]);
    const [image, setImage] = useState([]);
    const [createObjectURL, setCreateObjectURL] = useState([]);
    const [isCheck, setIsCheck] = useState(true);
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: data, error } = useSWR('/api/db_pesanan', fetcher, { refreshInterval: 1000 })
    if (!data) {
        return <div className="spinner"></div>
    } else if (error) {
        return <div>Something went wrong</div>
    }
    let pesanArr = data['message']

    let ruangan = pesanArr['ruangan']
    let hiburan = pesanArr['hiburan']
    let menu = pesanArr['menu']
    let paket = pesanArr['paket']
    console.log(pesanArr)

    let jamTersedia = ['08.00-09.00', '09.00-10.00', '11.00-12.00', '13.00-14.00', '15.00-16.00', '17.00-18.00', '19.00-20.00', '21.00-22.00', '22.00-23.00']

    const setChange = (e, jadwal) => {
        setIsCheck(e.target.checked)
        if (e.target.checked === true) {
            /*  tohar = tohar + parseInt(harga)
             setTotalHarga(tohar) */
            setJadwalPesan(arr => [...arr, jadwal]);
        } else {
            let index = jadwalPesan.indexOf(jadwal)
            setJadwalPesan(tim => [...tim.slice(0, index), ...tim.slice(index + 1)])
        }
        /*  {
             isCheck ? setTotalHarga(totalHarga => totalHarga + parseInt(harga)) : setTotalHarga(totalHarga => totalHarga - parseInt(harga))
         } */
        console.log(jadwalPesan)

    }
    const setChangeRuangan = (e, jadwal) => {
        setIsCheck(e.target.checked)
        if (e.target.checked === true) {
            /*  tohar = tohar + parseInt(harga)
             setTotalHarga(tohar) */
            setRuanganPesan(arr => [...arr, jadwal]);
        } else {
            let index = ruanganPesan.indexOf(jadwal)
            setRuanganPesan(tim => [...tim.slice(0, index), ...tim.slice(index + 1)])
        }
        /*  {
             isCheck ? setTotalHarga(totalHarga => totalHarga + parseInt(harga)) : setTotalHarga(totalHarga => totalHarga - parseInt(harga))
         } */
    }
    const setChangeHiburan = (e, jadwal) => {
        setIsCheck(e.target.checked)
        if (e.target.checked === true) {
            /*  tohar = tohar + parseInt(harga)
             setTotalHarga(tohar) */
            setHiburanPesan(arr => [...arr, jadwal]);
        } else {
            let index = hiburanPesan.indexOf(jadwal)
            setHiburanPesan(tim => [...tim.slice(0, index), ...tim.slice(index + 1)])
        }
        /*  {
             isCheck ? setTotalHarga(totalHarga => totalHarga + parseInt(harga)) : setTotalHarga(totalHarga => totalHarga - parseInt(harga))
         } */

    }
    return (
        <section >
            <div className="container" >
                <div className="section-title">
                    <h2>Reservation</h2>
                    <p>Lengkapi Data Reservasi</p>
                </div>
                <form method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay={100}>
                    <div className="row">
                        <div className="col-lg-10 col-md-10 mt-3 form-group">
                            <label style={{ color: "white" }}>Nama Pemesan</label>
                            <input type="text" name="name" onChange={(e) => setNamaPemesan(e.target.value)}
                                value={namaPemesan} className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate" />
                        </div>
                        <div className="col-lg-10 col-md-10 form-group mt-3">
                            <label style={{ color: "white" }}>Email</label>
                            <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)}
                                value={email} name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>
                        <div className="col-lg-10 col-md-10 form-group mt-3 ">
                            <label style={{ color: "white" }}>Nomor Kontak</label>
                            <input type="text" className="form-control" onChange={(e) => setNoKontak(e.target.value)}
                                value={noKontak} name="phone" id="phone" placeholder="Nomor Telp." data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate" />
                        </div>
                        <div className="col-lg-10 col-md-10 form-group mt-3">
                            <label style={{ color: "white" }}>Tanggal Booking</label>
                            <input type="date" className="form-control" onChange={(e) => setTglBooking(e.target.value)}
                                value={tglBooking} placeholder="Date" />
                        </div>
                        <div className="col-lg-10 col-md-10 form-group mt-3">
                            <label style={{ color: "white" }}>Jumlah Orang</label>
                            <input type="number" className="form-control" onChange={(e) => setJumlahOrang(e.target.value)}
                                value={jumlahOrang} name="people" id="people" placeholder="jumlah orang" data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                            <div className="validate" />
                        </div>
                        <div className="col-lg-10 col-md-10 form-group mt-3">
                            <label style={{ color: "white" }}>Jam Booking</label>

                            <a className="form-control" data-bs-toggle="collapse" href="#jam" >
                                <icon className='fa fa-sort-amount-desc'></icon>&nbsp;PILIH JAM
                            </a>
                            <div className="row collapse multi-collapse text-start mt-4" id="jam">

                                {jamTersedia.map((data, i) => (
                                    <>
                                        <div className='col-6 col-lg-3 mb-2' style={{ fontWeight: 500 }}>
                                            <div>
                                                <input type="checkbox" className="btn-check" id={`btn-${i}`}
                                                    name='jadwal'
                                                    onChange={(e) => setChange(e, data)}
                                                    value={data} />
                                                <label className="btn-apisport-parent btn-apisport" htmlFor={`btn-${i}`}>{data}</label>
                                            </div>
                                        </div>
                                    </>
                                ))}

                            </div>
                        </div>
                        <div className="col-lg-10 col-md-10 form-group mt-3">
                            <label style={{ color: "white" }}>Ruangan</label>

                            <a className="form-control" data-bs-toggle="collapse" href="#ruang" >
                                <icon className='fa fa-sort-amount-desc'></icon>&nbsp;Pilih Ruangan
                            </a>
                            <div className="row col collapse multi-collapse text-start mt-4" id="ruang">
                                {ruangan.map((data, i) => (
                                    <div className="col-6 col-md-6 p-2">
                                        <input type="checkbox" id={`btn-checkR${i}`}
                                            autoComplete="off" name='ruangan1'
                                            onChange={(e) => setChangeRuangan(e, data.namaruang)}
                                            className="btn-check" />
                                        <label className="card btn-apisport btn-apisport-parent" htmlFor={`btn-checkR${i}`}><div>
                                            <img src={data.foto1[0]} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="card-text" style={{ fontSize: '14px', lineHeight: '80%' }}><b>{data.namaruang}</b></p>
                                                <p className="card-text" style={{ fontSize: '14px', lineHeight: '80%' }}><b>kapasitas&nbsp; {data.kapasitas}&nbsp; orang</b></p>
                                            </div>
                                        </div></label>
                                    </div>
                                ))}
                            </div>


                        </div>
                        <div className="col-lg-10 col-md-10 form-group mt-3">
                            <label style={{ color: "white" }}>Hiburan</label>

                            <a className="form-control" data-bs-toggle="collapse" href="#hiburan" >
                                <icon className='fa fa-sort-amount-desc'></icon>&nbsp;Pilih Hiburan
                            </a>
                            <div className="row col collapse multi-collapse text-start mt-4" id="hiburan">
                                {hiburan.map((data, i) => (
                                    <div className="col-6 col-md-6  p-2">
                                        <input type="checkbox" id={`btn-checkH${i}`}
                                            autoComplete="off" name='ruangan1'
                                            onChange={(e) => setChangeHiburan(e, data.namahiburan)}
                                            className="btn-check" />
                                        <label className="card btn-apisport btn-apisport-parent" htmlFor={`btn-checkH${i}`}><div>
                                            <img src={data.foto[0]} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="card-text" style={{}}><b>{data.namahiburan}</b></p>
                                                <p className="card-text" style={{}}><b>Harga: {data.harga}</b></p>
                                            </div>
                                        </div></label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10 col-md-10 form-group mt-3 panel panel-default" >
                        <label style={{ color: "white" }} onClick={{}}>Pilih Paket/Menu</label>
                        <div className="scrollmenu form-control panel-heading">
                            <a data-bs-toggle="collapse" href="#menu1"><button className="collapsed btn">PAKET</button></a>
                            <a data-bs-toggle="collapse" href="#menu2"><button className="collapsed btn">Makanan Utama</button></a>
                            <a data-bs-toggle="collapse" href="#menu3"><button className="collapsed btn">Lauk Pauk</button></a>
                            <a data-bs-toggle="collapse" href="#menu4"><button className="collapsed btn">Sayur & Sambal</button></a>
                            <a data-bs-toggle="collapse" href="#menu5"><button className="collapsed btn">Minuman</button></a>
                            <a data-bs-toggle="collapse" href="#menu5"><button className="collapsed btn">Kue & Snack</button></a>
                        </div>
                        <div className="collapse" data-bs-parent="#accordion" id="menu1">
                            <label style={{ color: "white" }}>pilih menu disini</label>
                            <div className='col-6 col-lg-3 mb-2' style={{ fontWeight: 500 }}>
                                <div>
                                    <input type="checkbox" className="btn-check" id={`jam1`} />
                                    <label className="btn-apisport-parent btn-apisport" htmlFor={`jam1`}>08.00</label>
                                </div>
                            </div>
                        </div>
                        <div className="collapse" data-bs-parent="#accordion" id="menu2">
                            <label style={{ color: "white" }}>pilih menu disini</label>
                            <div className='col-6 col-lg-3 mb-2' style={{ fontWeight: 500 }}>
                                <div>
                                    <input type="checkbox" className="btn-check" id={`jam1`} />
                                    <label className="btn-apisport-parent btn-apisport" htmlFor={`jam1`}>08.00</label>
                                </div>
                            </div>
                        </div>
                        <div className="collapse" data-bs-parent="#accordion" id="menu3">
                            <label style={{ color: "white" }}>pilih menu disini</label>
                            <div className='col-6 col-lg-3 mb-2' style={{ fontWeight: 500 }}>
                                <div>
                                    <input type="checkbox" className="btn-check" id={`jam1`} />
                                    <label className="btn-apisport-parent btn-apisport" htmlFor={`jam1`}>08.00</label>
                                </div>
                            </div>
                        </div>
                        <div className="collapse" data-bs-parent="#accordion" id="menu4">
                            <label style={{ color: "white" }}>pilih menu disini</label>
                            <div className='col-6 col-lg-3 mb-2' style={{ fontWeight: 500 }}>
                                <div>
                                    <input type="checkbox" className="btn-check" id={`jam1`} />
                                    <label className="btn-apisport-parent btn-apisport" htmlFor={`jam1`}>Minum</label>
                                </div>
                            </div>
                        </div>
                        <div className="collapse" data-bs-parent="#accordion" id="menu5">
                            <label style={{ color: "white" }}>pilih menu disini</label>
                            <div className='col-6 col-lg-3 mb-2' style={{ fontWeight: 500 }}>
                                <div>
                                    <input type="checkbox" className="btn-check" id={`jam1`} />
                                    <label className="btn-apisport-parent btn-apisport" htmlFor={`jam1`}>Menu Makan</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-10 col-md-10 form-group mt-3">
                        <label>Catatan</label>
                        <textarea className="form-control" name="message" rows={5} placeholder="Message" defaultValue={""} />
                        <div className="validate" />
                        <hr></hr>
                    </div>

                    <div className='row'>
                        <h3 className='text-black'>Pesanan</h3>
                        <h5 className='text-black fw-bold'>Nama: {namaPemesan}</h5>
                        <h5 className='text-black fw-bold'>Email: {email}</h5>
                        <h5 className='text-black fw-bold'>No. Telp: {noKontak}</h5>
                        <h5 className='text-black fw-bold'>Tgl Reservasi: {tglBooking != '' ? moment(tglBooking, 'YYYY-MM-DD').format('DD-MM-YYYY') : ''}</h5>
                        <h5 className='text-black fw-bold'>Jumlah Orang: {jumlahOrang}</h5>
                        <h5 className='text-black fw-bold'>Ruangan: </h5>
                        {ruanganPesan.length === 0 ? (
                            <h4>Tidak ada data Jadwal yang dipesan</h4>
                        ) : (
                            <>

                                {ruanganPesan.map((data, index) => (
                                    <div className='col-6 col-sm-3 mb-2'>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <span>{data}</span><br></br>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                        <h5 className='text-black fw-bold'>Hiburan: </h5>
                        {hiburanPesan.length === 0 ? (
                            <h4>Tidak ada data Jadwal yang dipesan</h4>
                        ) : (
                            <>

                                {hiburanPesan.map((data, index) => (
                                    <div className='col-6 col-sm-3 mb-2'>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <span>{data}</span><br></br>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                        <h5 className='text-black fw-bold'>Jam Pesanan: </h5>
                        {jadwalPesan.length === 0 ? (
                            <h4>Tidak ada data Jadwal yang dipesan</h4>
                        ) : (
                            <>

                                {jadwalPesan.map((data, index) => (
                                    <div className='col-6 col-sm-3 mb-2'>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <span>{data}</span><br></br>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                        <h5 className='text-black fw-bold'>Menu: </h5>
                        <h5 className='text-black fw-bold'>Harga: </h5>
                    </div>
                    <div className="text-center col-lg-10 col-md-10 form-group mt-3 mt-5">
                        <a href="/"> <button className="book-a-table-btn" >Reservasi sekarang</button></a>
                    </div>

                </form>
            </div>
        </section>
    )
}