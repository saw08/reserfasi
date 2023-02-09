import { useState } from 'react';
import Link from 'next/link';

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
                <a href="">{props.namamenu}</a><span style={{ textAligent: 'left' }}>Rp {props.harga}</span>
                <span style={{ textAligent: 'left' }}>Kategoti : {props.kategori}</span>
                
            </div>
            <button type="button"
                onClick={() => deleteAlbum()}
                className="btn btn-outline-secondary my-2" >
                HAPUS
            </button>
            <Link className="btn btn-outline-secondary " href={{
                pathname: './edit-menu',
                query: {
                    namamenu: props.namamenu,
                    kategori: props.kategori,
                    harga: props.harga, 
                    objectId: props._id

                }

            }}>
                edit
            </Link>
        </div>

    )
}

