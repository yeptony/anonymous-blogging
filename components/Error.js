const Error = props => (
  <div className="error-container">
    <h3>An error occurred</h3>
    <p>{props.message}</p>
  </div>
)

export default Error
