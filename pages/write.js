import Remarkable from 'remarkable'
import Layout from '../components/Layout'
import MarkdownPreviewerHeader from '../components/MardownPreviewerHeader'
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
      timestamp: Date.now(),
      author: '',
      title: 'Untitled',
      markdown: '',
      formattedText: ''
    }
    this.onMarkdownType = this.onMarkdownType.bind(this)
    this.setTitle = this.setTitle.bind(this)
    this.publish = this.publish.bind(this)
  }

  onMarkdownType(e) {
    this.setState({
      markdown: e.target.value,
      formattedText: md.render(e.target.value)
    })
  }

  setTitle(e) {
    let title = e.target.value === '' ? 'Untitled' : e.target.value.toString()
    this.setState({ title })
  }

  publish(e) {
    e.preventDefault()
    return {
      timestamp: Date.now(),
      author: this.state.author,
      title: this.state.title,
      formattedText: this.state.formattedText
    }
  }

  render() {
    return (
      <Layout>
        <MarkdownPreviewerHeader {...this.state} onChange={this.setTitle} publish={this.publish} />
        <MarkdownPreviewer {...this.state} onType={this.onMarkdownType} />
      </Layout>
    )
  }
}

export default Write
