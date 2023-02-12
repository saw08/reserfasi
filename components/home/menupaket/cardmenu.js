import { useState } from 'react';
import Link from 'next/link';
import rupiah from '../../Rupiah'


export default function Cardpesanan({ props }) {
    // let namaHasil = props.namapaket.split(" ").join("");

    
    return (
        <div className="col-lg-6 col-md-6" style={{ borderStyle: 'solid', borderColor: 'GrayText', borderRadius: '0.4rem' }}>
            <div className="menu-content p-2">
                <a href="">{props.namamenu}</a><span style={{ textAligent: 'left' }}>{rupiah(props.harga)}</span>
                <span style={{ textAligent: 'left' }}>Kategori : {props.kategori}</span>
                
            </div>
        </div>

    )
}

