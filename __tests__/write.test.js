import React from 'react'
import { mount, shallow } from 'enzyme'

import Write from '../pages/write'

describe('Pages', () => {
  describe('Write', () => {
    const write = mount(<Write />)
    const input = write.find('textarea')
    const markdown = write.find('.markdown-preview')
    input.simulate('change', {
      target: { value: '# hello' }
    })
    it('should parse markdown on type', () => {
      expect(input.text()).toBe('# hello')
      expect(markdown.contains(<h1>hello</h1>))
    })
    it('should set state to typed value', () => {
      expect(write.state('markdown')).toBe('# hello')
      expect(write.state('formattedText')).toBe("<h1>hello</h1>\n")
    })
    it('should escape html', () => {
      input.simulate('change', {
        target: { value: '<script>alert(2+2);</script>' }
      })
      jest.spyOn(window, 'alert').mockImplementation(() => {});
      expect(input.text()).toBe('<script>alert(2+2);</script>')
      expect(markdown.contains(<p><script>alert(2+2);</script></p>))
      expect(window.alert).toHaveBeenCalledTimes(0)
    })
  })
})

