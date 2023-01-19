import { useState } from 'react';
export default function Cardpesanan({ props }) {
    // let namaHasil = props.namapaket.split(" ").join("");

    const deleteAlbum = async () => {
        try {
            console.log('Try')
            // Delete post
            await fetch('/api/db_paket', {
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
        <div className="col-lg-6 Mmenu filter-specialty">
            <div className="menu-content">
                <a href="#">Lobster Roll</a><span>$12.95</span>
            </div>
            <div className="menu-ingredients">
                Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
            </div>
        </div>

    )
}

