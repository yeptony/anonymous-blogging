import Remarkable from 'remarkable'
import Layout from '../components/Layout'
import MarkdownPreviewer from '../components/MarkdownPreviewer'
import '../style/main.scss'

const md = new Remarkable({
  xhtmlOut: true,
  breaks: true,
  linkify: true
})

class Write extends React.Component {
  constructor() {
    super()
    this.state = {
      timestamp: 0,
      author: '',
      title: 'Untitled',
      markdown: '',
      formattedText: ''
    }
    this.onMarkdownType = this.onMarkdownType.bind(this)
  }

  onMarkdownType(e) {
    this.setState({
      markdown: e.target.value,
      formattedText: md.render(e.target.value)
    })
  }

  render() {
    return (
      <Layout>
        <MarkdownPreviewer {...this.state} onType={this.onMarkdownType} />
      </Layout>
    )
  }
}

export default Write
