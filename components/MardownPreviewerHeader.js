import Link from 'next/link'

const MarkdownPreviewerHeader = props => (
  <div className="markdown-header">
    <input type="text" placeholder="Untitled" onChange={props.onChange} value={props.title} />
    <p>
      {props.author}
      <span> {props.timestamp}</span>
    </p>
    <div className="button-group">
      <button type="button" className="publish solid-button" onClick={props.publish}>
        Publish
      </button>
      <Link href="/">
        <button type="button" className="transparent-button">
          Cancel
        </button>
      </Link>
    </div>
  </div>
)

export default MarkdownPreviewerHeader
