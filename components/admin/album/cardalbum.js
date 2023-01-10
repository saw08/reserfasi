import { useState } from 'react';
export default function Cardpesanan({ props }) {
    const foto = "/" + props.foto
    const deleteAlbum = async () => {
        try {
            console.log('Try')
            // Delete post
            await fetch('/api/db_album', {
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
        <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                    <img src={props.foto} alt className="img-fluid" />
                
            </div>
            <div>
                <label>{` ${props.deskripsi}`}</label>
                <button type="button"
                    onClick={() => deleteAlbum()}
                    className="btn btn-outline-secondary mx-3" >
                    HAPUS
                </button>
            </div>
        </div>
    )
}

