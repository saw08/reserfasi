
import Cardfoto from './cardpaket'
import useSWR from 'swr'



export default function Home() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: data, error } = useSWR('/api/db_paket', fetcher, { refreshInterval: 1000 })

    if (!data) {
        return <div className="spinner"></div>
    } else if (error) {
        return <div>Something went wrong</div>
    }


    let paket = data['message']
    return (
        <section id="menu" className="menu section-bg">
            <div className="container" >
                <div className="section-title">
                    <h2>Paket</h2>
                    <p>Daftar Paket</p>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay={100}>
                </div>
                <div className="row menu-container" >
                    <div className="row col-lg-12">
                        {paket.length === 0 ? (
                            <></>
                        ) : (
                            <>
                                {paket.map((data, i) => (
                                    <Cardfoto props={data} />
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
