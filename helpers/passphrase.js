import nouns from '../lib/nouns'
import adjs from '../lib/adjs'

const random = max => Math.floor(Math.random() * Math.floor(max))

const passphrase = () =>
  `${adjs.adjs[random(adjs.adjs.length)]} ${adjs.adjs[random(adjs.adjs.length)]} ${
    nouns.nouns[random(nouns.nouns.length)]
  }`

export default passphrase
