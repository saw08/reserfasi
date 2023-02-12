import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function Cardruangan({ props }) {
    let namaHasil = props.namaruang.split(" ").join("");
    
    return (
        <div className='p-2 col-lg-4 '>
            <div  style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.3rem' }}>
            <div className="gallery-item">
                <div id={`${namaHasil}`} className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {props.foto1.map((data, i) => (
                            <>
                                {i == 0 ?
                                    (<div className="carousel-item active">
                                        <img src={`${data}`} className="d-block w-100" height={300} width={300} style={{ objectFit: "cover" }} />
                                    </div>) :
                                    (<div className="carousel-item">
                                        <img src={`${data}`} className="d-block w-100" height={300} width={300} style={{ objectFit: "cover" }} />
                                    </div>)}
                            </>
                        ))}
                        </div>
                        {props.foto1.map((data, i) => (
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

            </div>
            <div className=" p-2 box ">
                <span>{props.i}</span>
                <h4>{props.namaruang}</h4>
                <h5>kapasitas{props.kapasitas}orang</h5>
                    <p>kategori :{props.kategori}</p>
                    <p>{props.deskripsi}</p>
                </div>
            </div>
        </div>
    )
}

