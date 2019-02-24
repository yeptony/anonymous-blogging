import Remarkable from 'remarkable'
import '../style/main.scss'

const md = new Remarkable({
  xhtmlOut: true,
  breaks: true,
  linkify: true,
})

class Write extends React.Component {
  constructor() {
    super()
    this.state = {
      markdown: ''
    }
    this.onType = this.onType.bind(this)
  }

  onType(e) {
    this.setState({
      markdown: e.target.value,
    })
  }

  render() {
    return (
      <div className="write-container">
        <div className="write-sub-container">
          <textarea value={this.state.markdown} onChange={this.onType}/>
        </div>
        <div className="write-sub-container">
          <div
            className="markdown-preview"
            dangerouslySetInnerHTML={{ __html: md.render(this.state.markdown) }}
          />
        </div>
      </div>
    )
  }
}

export default Write
