const sanitize = (data) => {
  if (
    data.timestamp === undefined ||
    data.author === undefined ||
    data.title === undefined ||
    data.formattedText === undefined ||
    data.author === '' ||
    data.title === '' ||
    data.formattedText === ''
  ) {
    return {
      isError: true,
      message: 'A mandatory field has been left empty'
    }
  }
  return {
    isError: false,
    message: ''
  }
}

export default sanitize
