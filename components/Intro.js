import React from 'react'
import Link from 'next/link'

const Intro = props => (
  <div className="intro">
    <p>I am a</p>
    <p className="passphrase">{props.pass}</p>
    <p className="small-text">
      This is how you'll be identified on Blogger, keep those three words in mind
    </p>
    <div className="button-group">
      <Link href="/read">
        <button className="read-button">Read</button>
      </Link>
      <Link href="/write">
        <button className="write-button">Write</button>
      </Link>
    </div>
  </div>
)

export default Intro
