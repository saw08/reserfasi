
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
        <section id="menu" className="menu section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Menu</h2>
                    <p>Daftar Ruangan</p>
                </div>
                <div className="row col-lg-12 text-white">
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
    )
}
