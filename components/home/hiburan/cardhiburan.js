import Link from 'next/link';
export default function Cardpesanan({ props }) {
    let namaHasil = props.namahiburan.split(" ").join("");

    
    return (
        <div className="col-lg-4 menu-item filter-starters bordermenu" style={{ borderStyle: 'solid', borderColor: 'GrayText', borderRadius: '8px' }}>
            <div id={`${namaHasil}`} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner mt-2">
                    {props.foto.map((data, i) => (
                        <>
                            {i == 0 ?
                                (<div className="carousel-item active">
                                    <img src={`${data}`} className="d-block rounded  w-100" height={300} width={300} style={{ objectFit: "cover" }} />
                                </div>) :
                                (<div className="carousel-item">
                                    <img src={`${data}`} className="d-block rounded  w-100" height={300} width={300} style={{ objectFit: "cover" }} />
                                </div>)}
                        </>
                    ))}
                </div>
                {props.foto.map((data, i) => (
                    <>
                        {i == 0 ?
                            (<button className="carousel-control-prev" type="button" data-bs-target={`#${namaHasil}`} data-bs-slide={i}>
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>) :
                            (<button className="carousel-control-next" type="button" data-bs-target={`#${namaHasil}`} data-bs-slide={i}>
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>)
                        }

                    </>
                ))}
            </div>
            <div className="menu-content">
                <span>{props.namahiburan}<a style={{ color: '#cda45e', marginLeft: '4px' }}>Rp.{props.harga}</a></span>
            </div>
            <div>
                <span>{props.deskripsi}</span>
                <ul>
                    {props.subhiburan.map((data, i) => (
                        <>
                            <li style={{ color: "wheat" }}>{data}</li>

                        </>
                    ))}
                </ul>
            </div>
        </div>

    )
}

