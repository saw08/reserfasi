
export default function Cardpesanan({ props }) {
    return (
        <div className="col-lg-3 col-md-4">
            <div className=''>
                <div className="profile-card-6">
                    <img src={props.foto} className="img img-fluid" height={300} width={300} style={{ objectFit: "cover" }} />
                    <div className="profile-name">{` ${props.deskripsi}`}</div>
                </div>
            </div>
        </div>
    )
}

