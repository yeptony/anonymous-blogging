import Link from 'next/link'

const MarkdownPreviewerHeader = props => (
  <div className="markdown-header">
    <div className="title-container">
      <p>
        {props.author}
        <span> {props.timestamp}</span>
      </p>
      <input type="text" placeholder="Untitled" onChange={props.onChange} value={props.title} />
    </div>
    <div className="button-group">
      <button type="button" className="button-small solid-button" onClick={props.publish}>
        Publish
      </button>
      <Link href="/">
        <button type="button" className="button-small transparent-button">
          Cancel
        </button>
      </Link>
    </div>
  </div>
)

export default MarkdownPreviewerHeader
