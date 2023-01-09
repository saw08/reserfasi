//@ts-check
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Cardruangan({ props }) {
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();
    let namaHasil = props.namaruang.split(" ").join("");
    
    const deleteruang = async (namaruang) => {
        //change deleting state
        setDeleting(true);
        try {
            // Delete post
            await fetch('/api/db_ruangan', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    namaruang: props.namaruang,
                }),
            });
            // reset the deleting state
            setDeleting(false);
            // reload the page
            return router.push(router.asPath);
        } catch (error) {
            // stop deleting state
            return setDeleting(false);
        }
    };
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
                                        <img src={`${data}`} className="d-block w-100" alt="..." />
                                    </div>) :
                                    (<div className="carousel-item">
                                        <img src={`${data}`} className="d-block w-100" alt="..." />
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
                <p>{props.deskripsi}</p>
                </div>
                <button type="button"
                    onClick={() => deleteruang()}
                    className="btn btn-outline-secondary mx-3" >
                    HAPUS
                </button>
            </div>
        </div>
    )
}

