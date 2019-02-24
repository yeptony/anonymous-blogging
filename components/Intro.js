import React from 'react'

const Intro = props => (
  <div className="intro">
    <p>I am a</p>
    <p className="passphrase">{props.pass}</p>
    <p className="small-text">This is how you'll be identified on Blogger, keep those three words in mind</p>
  </div>
)

export default Intro
