//@ts-check
import React from 'react'

export default function Cardruangan({ props }) {
    let namaHasil = props.namaruang.split(" ").join("");
    const foto = "/" + props.foto

    return (
        <div className="col-lg-4">
            <div className="gallery-item">
                <div id={`${namaHasil}`} className="carousel slide" data-bs-ride="carousel">
                    {props.foto1.map((data, i) => (
                        <>
                            {i == 0 ?
                                (<button type="button" data-bs-target={`#${namaHasil}`} data-bs-slide-to={i} className="active" aria-current="true" aria-label={`Slide ${i}`} />) :
                                (<button type="button" data-bs-target={`#${namaHasil}`} data-bs-slide-to={i} aria-label={`Slide ${i}`} />)}

                        </>
                    ))}
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
            <div className="box ">
                <span>{props.i}</span>
                <h4>{props.namaruang}</h4>
                <h5>kapasitas{props.kapasitas}orang</h5>
                <p>{props.deskripsi}</p>
            </div>
        </div>
    )
}

