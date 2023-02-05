
import Cardhiburan from './cardhiburan'
import useSWR from 'swr'



export default function Home() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: data, error } = useSWR('/api/db_hiburan', fetcher, { refreshInterval: 1000 })

    if (!data) {
        return <div className="spinner"></div>
    } else if (error) {
        return <div>Something went wrong</div>
    }


    let hiburan = data['message']
    return (
        <section className="section-bg">
            <div className="container" >
                <div className="section-title mb-4">
                    <p style={{ fontSize: '28px' }}>Hiburan</p>
                </div>
                <div className="row text-white">
                    {hiburan.length === 0 ? (
                        <></>
                    ) : (
                        <>

                                {hiburan.map((data, i) => (
                                <Cardhiburan props={data} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
