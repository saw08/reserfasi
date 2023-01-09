import '../styles/globals.css'
import '../styles/style.css'
import '../styles/bootstrap/css/bootstrap.min.css'
import '../styles/bootstrap-icons/bootstrap-icons.css'
import Layout from '../components/layout'
import Layoutadmmin from '../components/layoutadmin'
import { useRouter } from 'next/router'
import '../styles/font-awesome-4.7.0/css/font-awesome.min.css'




function MyApp({ Component, pageProps }) {
  const router = useRouter()
  if (router.pathname.startsWith('/admin/')) {
    return (
      <Layoutadmmin>
        <Component {...pageProps} />
      </Layoutadmmin>
    )
  }
  else {
    return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
  }
}

export default MyApp
