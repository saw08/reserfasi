import Navbar from './navbar'
import Footer from './footer'
import Helmet from 'react-helmet'
import Head from 'next/head';
import Script from 'next/script'

const Layout = ({ children }) => {

    return (
        <div className="container-xxl mx-auto p-0  position-relative header-2-2" >
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="undefined" crossorigin="anonymous"></script>
                <script src="../../styles/bootstrap/js/bootstrap.min.js"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
            </Helmet>
            <Head>


                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <title>Warung kemarang</title>
                <meta content name="description" />
                <meta content name="keywords" />


            </Head>
               <Navbar />
                {children}
                <Footer />
        </div>
    )
}
export default Layout;