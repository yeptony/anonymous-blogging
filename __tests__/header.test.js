import React from 'react'
import { shallow } from 'enzyme'

import Header from '../components/Header'

describe('<Header />', () => {
  it('should render correctly', () => {
    const header = shallow(<Header />)
    const nav = header.find('nav')
    const logo = header.find('p')
    const menu = header.find('ul')
    expect(nav.exists())
    expect(logo.exists())
    expect(menu.exists())
  })
})
