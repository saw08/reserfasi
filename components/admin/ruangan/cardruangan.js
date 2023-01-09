//@ts-check
import React from 'react'

export default function Cardruangan({ props }) {
    let namaHasil = props.namaruang.split(" ").join("");
    const foto = "/" + props.foto

    return (
        <div className="col-lg-4">
            <div style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.3rem' }}>
            <div className="gallery-item">
                <div id={`${namaHasil}`} className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {props.foto1.map((data, i) => (
                            <>
                                {i == 0 ?
                                    (<div className="carousel-item active">
                                        <img src={`${data}`} className="d-block w-100" alt="..." />
                                    </div>) :
                                    (<div className="carousel-item">
                                        <img src={`${data}`} className="d-block w-100" alt="..." />
                                    </div>)}
                            </>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={`#${namaHasil}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={`#${namaHasil}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
            <div className="box p-3">
                <span>{props.i}</span>
                <h5>{props.namaruang}</h5>
                <h6>kapasitas &nbsp;{props.kapasitas}&nbsp;orang</h6>
                <h6>kapasitas&nbsp;{props.kapasitas}&nbsp;orang</h6>
                <p>{props.deskripsi}</p>
                </div>
                </div>
        </div>
    )
}

