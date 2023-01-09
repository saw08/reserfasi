export default function Nota() {
    return (
        <section id="specials" className="specials">
            <div className="container" >
                <div>

                    <div>
                        <div className="container">
                            <div>
                                <h1 className="justify-content-center mt-3">
                                    <center><b>NOTA</b></center>
                                </h1>
                                <div className="d-flex flex-row p-0 justify-content-center">
                                    <span>Kode Nota: 123432</span>
                                </div>
                                <hr></hr>
                            </div>
                            <div className="mb-3">
                                <div className="row justify-content-center">
                                    <div className="col-md-10">
                                        <div className="card">
                                            {/* <div className="d-flex flex-row p-2 justify-content-center">
                                            <img src="https://laptopnesia.com/wp-content/uploads/2019/01/Cara-Membuat-Barcode-5-1.jpg" width='200' />
                                        </div> */}
                                            <div className=" mt-3">
                                                <h3 style={{ color: 'black' }} ><b>WARUNG KEMARANG</b></h3>
                                                <div className="row">
                                                    <div className='col-12 col-sm-4 mb-2'>
                                                        <h4 style={{ color: 'black' }}>12-12-2-2022</h4>
                                        
                                                                <div className='card'>
                                                                    <div className='card-body'>
                                                                <h3 style={{ color: 'black'}}>10.00 - 13.00</h3>
                                                            </div>

                                                        </div>
                                                            </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="d-flex flex-row justify-content-center">
                                                <div className="form-group">
                                                    <label>Nama Pemesan : </label>
                                                    <input type="email" className="form-control" value='supri' readOnly />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row justify-content-center">
                                                <div className="form-group">
                                                    <label>Email : </label>
                                                    <input type="email" className="form-control" value='email@' readOnly />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row justify-content-center">
                                                <div className="form-group">
                                                    <label>No. WA Pemesan: </label>
                                                    <input type="email" className="form-control" value='nowa' readOnly />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row justify-content-center">
                                                <div className="form-group">
                                                    <label>Jumlah tamu: </label>
                                                    <input type="email" className="form-control" value='20' readOnly />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row justify-content-center">
                                                <div className="form-group">
                                                    <label>Paket yang dipilih : </label>
                                                    <input type="email" className="form-control" value='paket 80 pax A' readOnly />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="d-flex flex-row justify-content-center">
                                                <div className="form-group">
                                                    <label>Ruangan : </label>
                                                    <input type="email" className="form-control" value='angklung' readOnly />
                                                </div>
                                            </div>
                                                <div className="d-flex flex-row justify-content-center">
                                                    <div className="form-group">
                                                        <label>Hiburan : </label>
                                                        <input type="email" className="form-control" value='' readOnly />
                                                    </div>
                                            </div>
                                            <div className="d-flex flex-row justify-content-center">
                                                <div className="form-group">
                                                    <label>Catatan : </label>
                                                    <input type="email" className="form-control" value='catatan' readOnly />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row justify-content-center">
                                                <div className="form-group col-8">
                                                    <label>Bukti Pembayaran : </label>
                                                    <img src="../../1.jpg" className='img-fluid mb-3'></img>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="address p-2">
                                            </div>
                                            <div className="container text-center mb-3">
                                                <h5 style={{ color: 'black' }}>Tunjukkan Nota ini saat datang </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
