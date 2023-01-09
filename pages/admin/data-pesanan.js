// import Pesanan from '../../components/admin/cardpesanan'

export default function Datapesanan() {
    return (
        <div>
            <div>
                {/* ======= Hero Section ======= */}
                <section id="hero" className="d-flex align-items-center">
                    <div className="" >
                        <div className=" text-white p-3">
                            <h3 className="text-white table text-center">Data Pesanan</h3>
                            <table className="text-white table text-center">
                                <thead>
                                    <tr className="bg-dark">
                                        <th>No</th>
                                        <th>Nama</th>
                                        <th>Ruangan</th>
                                        <th>Jam</th>
                                        <th>Paket</th>
                                        <th>Pax</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody style={{ height: '10px !important', overflow: 'scroll' }}>
                                    <tr>
                                            <td className="filterable-cell">1</td>
                                            <td className="filterable-cell">orang</td>
                                            <td className="filterable-cell">Rumah adat</td>
                                            <td className="filterable-cell">12:00</td>
                                            <td className="filterable-cell">Paket</td>
                                            <td className="filterable-cell">Pax</td>
                                        <td className="filterable-cell">
                                            <div className="row ">
                                                <div className="col-4">
                                                        <a className="btn d-block btn-success text-white ">detail</a>
                                                </div>
                                                <div className="col-4">
                                                        <a className="btn d-block btn-danger text-white ">edit</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </section>{/* End Hero */}
                <main id="main">
                </main>
            </div>

        </div>

    )
}
