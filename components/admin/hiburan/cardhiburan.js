import { useState } from 'react';
export default function Cardpesanan({ props }) {
    let namaHasil = props.namahiburan.split(" ").join("");

    const deleteHiburan = async () => {
        try {
            console.log('Try')
            // Delete post
            await fetch('/api/db_hiburan', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    _id: props._id,
                }),
            });
            // reset the deleting state
            // reload the page
            alert('Album Terhapus')
        } catch (error) {
            // stop deleting state
        }
    };
    return (
        <div className="col-lg-4 menu-item filter-starters bordermenu" style={{ borderStyle: 'solid', borderColor: 'GrayText', borderRadius: '8px' }}>
            <div id={`${namaHasil}`} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner mt-2">
                    {props.foto.map((data, i) => (
                        <>
                            {i == 0 ?
                                (<div className="carousel-item active">
                                    <img src={`${data}`} className="d-block rounded  w-100" alt="..." />
                                </div>) :
                                (<div className="carousel-item">
                                    <img src={`${data}`} className="d-block rounded  w-100" alt="..." />
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

            <div>
                <button type="button"
                    onClick={() => deleteHiburan()}
                    className="btn btn-outline-secondary my-3" >
                    HAPUS
                </button>
            </div>
        </div>

    )
}

