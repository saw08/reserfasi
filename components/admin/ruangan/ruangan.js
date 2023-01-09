
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
        <section className="section-bg">
            <div className="container" >
                <div className="section-title text-center">
                    <p style={{ fontSize: '28px' }}>ruangan</p>
                </div>
                <div className="row col-lg-12">
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
