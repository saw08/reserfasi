import { useState } from 'react';
export default function Cardpesanan({ props }) {
    const foto = "/" + props.foto

    return (
        <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <a href={`${props.foto}`} className="gallery-lightbox" data-gall="gallery-item">
                    <img src={props.foto} alt className="img-fluid" />
                    <label>{` ${props.deskripsi}`}</label>
                </a>
            </div>
        </div>
    )
}

