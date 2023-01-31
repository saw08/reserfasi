
import Cardmenu from './cardmenu'
import useSWR from 'swr'



export default function Menumap() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: data, error } = useSWR('/api/db_menu', fetcher, { refreshInterval: 1000 })

    if (!data) {
        return <div className="spinner"></div>
    } else if (error) {
        return <div>Something went wrong</div>
    }


    let menu = data['message']
    return (
        <section id="menu" className="menu section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Menu</h2>
                    <p>Check Our Tasty Menu</p>
                </div>
                <div className="row col-lg-12 menu-container">
                    {menu.length === 0 ? (
                        <></>
                    ) : (
                        <>
                            {menu.map((data, i) => (
                                <Cardmenu props={data} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
