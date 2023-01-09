
export default function Cardpesanan() {

    return (
        <div className="p-3  ">
            <div className="shadow-sm bg-dark  border border-2  p-3 text-start text-white">
                <div className="lingkaran text-center">
                <h3><b>1</b></h3>
                </div>
                <h4><b>Nama Pemesan:</b>fulan</h4>
                <h4><b>Ruangan:</b> omprog</h4>
                <h4><b>Jam:</b> 12:00</h4>
                <h5><b>Paket:</b> 75 B</h5>
                <h5><b>Jumlah Tamu:</b> 20</h5>
                <img src="../../1.jpg" className='img-fluid mb-3'></img>
                <div className="row">
                    <div className="col-6">
                        <a className="btn d-block btn-success text-white p-3 mb-2">Terima</a>
                    </div>
                    <div className="col-6">
                        <a className="btn d-block btn-danger text-white p-3 mb-2">Tolak</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

