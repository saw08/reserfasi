
import Cardruang from './cardruangan'
import useSWR from 'swr'



export default function Ruangancp() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: data, error } = useSWR('/api/db_ruangan', fetcher, { refreshInterval: 1000 })

    if (!data) {
        return <div className="spinner"></div>
    } else if (error) {
        return <div>Something went wrong</div>
    }


    let ruangan = data['message']

    return (
        <div className='bg-dark'>
        <section id="book-a-table">
            <div className="container" >
                {/* <div className="section-title text-center">
                    <p style={{fontSize:'28px'}}>Mulai Reserfasi Sekarang</p>
                </div> */}
                <div className="section-title">
                    <p style={{ fontSize: '22px' }}>Ruangan</p>
                </div>
                <div className="row text-white col-lg-12 ">
                    {ruangan.length === 0 ? (
                        <></>
                    ) : (
                        <>

                            {ruangan.map((data, i) => (
                                <Cardruang props={data} />
                            ))}
                        </>
                    )}
                </div>
            </div>
            </section>
        </div>
    )
}
