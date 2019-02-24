const MarkdownPreviewer = props => (
  <div className="write-container">
    <div className="write-sub-container">
      <textarea value={props.markdown} onChange={props.onType} />
    </div>
    <div className="write-sub-container">
      <div className="markdown-preview" dangerouslySetInnerHTML={{ __html: props.formattedText }} />
    </div>
  </div>
)

export default MarkdownPreviewer
