import Remarkable from 'remarkable'
import firebase from '../lib/db'
import Layout from '../components/Layout'
import MarkdownPreviewerHeader from '../components/MardownPreviewerHeader'
import MarkdownPreviewer from '../components/MarkdownPreviewer'
import Error from '../components/Error'
import sanitize from '../lib/sanitize'
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
      author: 'Johnny',
      title: 'Untitled',
      markdown: '',
      formattedText: '',
      error: {
        isError: false,
        message: ''
      },
      success:{
        isSuccess: false,
        message: ''
      }
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
    const title = e.target.value === '' ? 'Untitled' : e.target.value.toString()
    this.setState({ title })
  }

  publish(e) {
    e.preventDefault()
    const data = {
      timestamp: Date.now(),
      author: this.state.author,
      title: this.state.title,
      formattedText: this.state.formattedText
    }
    if (sanitize(data).isError) {
      this.setState({
        error: {
          isError: true,
          message: sanitize(data).message
        }
      })
    } else {
      const db = firebase.firestore()
      db.collection('posts').add(data)
        .then(post => {
          this.setState({
            error: {
              isError: false,
              message: ''
            },
            success: {
              isSUcces: true,
              message: `Post ${post.id} saved successfully`
            }
          })
        })
        .catch(err => {
          this.setState({
            error: {
              isError: true,
              message: `An error occured while saving to the database: ${err}`
            }
          })
        })
    }
  }

  render() {
    return (
      <Layout>
        {this.state.error.isError && <Error message={this.state.error.message}/>}
        <MarkdownPreviewerHeader {...this.state} onChange={this.setTitle} publish={this.publish} />
        <MarkdownPreviewer {...this.state} onType={this.onMarkdownType} />
      </Layout>
    )
  }
}

export default Write
