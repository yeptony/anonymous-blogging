import Head from 'next/head'
import Header from './Header'

const Layout = props => (
  <div className="main-container">
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>Blogger</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Header />
    {props.children}
  </div>
)

export default Layout
