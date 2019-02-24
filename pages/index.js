import '../style/main.scss'

import passphrase from '../helpers/passphrase'

import Layout from '../components/Layout'
import Intro from '../components/Intro'

class Home extends React.Component {
  static async getInitialProps() {
    const pass = await passphrase()
    return { pass }
  }

  render() {
    return (
      <Layout>
        <Intro pass={this.props.pass} />
      </Layout>
    )
  }
}

export default Home
