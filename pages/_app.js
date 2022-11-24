import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        {console.log(Component.title)}
      </Layout>
    </>
  )
}

export default MyApp
