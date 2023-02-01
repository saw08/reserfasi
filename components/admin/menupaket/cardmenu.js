import { useState } from 'react';
export default function Cardpesanan({ props }) {
    // let namaHasil = props.namapaket.split(" ").join("");

    const deleteAlbum = async () => {
        try {
            console.log('Try')
            // Delete post
            await fetch('/api/db_menu', {
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
            alert('Paket Terhapus')
        } catch (error) {
            // stop deleting state
        }
    };
    return (
        <div className="col-lg-6 col-md-6" style={{ borderStyle: 'solid', borderColor: 'GrayText', borderRadius: '0.4rem' }}>
            <div className="menu-content p-2">
                <a href="">{props.namamenu}</a><span style={{textAligent:'left'}}>Rp {props.harga}</span>
                
            </div>
            <button type="button"
                onClick={() => deleteAlbum()}
                className="btn btn-outline-secondary my-2" >
                HAPUS
            </button>
        </div>

    )
}

