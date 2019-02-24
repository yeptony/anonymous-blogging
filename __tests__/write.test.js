import React from 'react'
import sinon from 'sinon'
import { mount, shallow } from 'enzyme'

import Write from '../pages/write'
import MarkdownPreviewerHeader from '../components/MardownPreviewerHeader'

describe('Pages', () => {
  describe('Markdown to HTML', () => {
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

  describe('Title Setting', () => {
    const write = mount(<Write />)
    const input = write.find('input')
    it('should save the title in the state', () => {
      input.simulate('change', {
        target: { value: 'Title' }
      })
      expect(write.state('title')).toBe('Title')
    })
    input.simulate('change', {
      target: { value: '' }
    })
    it('should return "Untitled" if an empty string is passed', () => {
      input.simulate('change', {
        target: { value: '' }
      })
      expect(write.state('title')).toBe('Untitled')
    })
    it('should not break if a non string is passed', () => {
      input.simulate('change', {
        target: { value: 1234 }
      })
      expect(write.state('title')).toBe('1234')
    })
    it('should keep the title state into the input', () => {
      expect(input.props().value).toBe('Untitled')
    })
  })

  describe('Timestamp Setting', () => {
    const write = mount(<Write />)
    it('should get a timestamp when mounted', () => {
      expect(write.state('timestamp')).toBeDefined()
    })
    it('should be a number, close to Date.now()', () => {
      expect(typeof write.state('timestamp')).toBe('number')
      expect(write.state('timestamp')).toBeCloseTo(Date.now(), -3)
    })
  })

  describe('Publish post', () => {
    const publish = sinon.spy()
    const write = mount(<MarkdownPreviewerHeader publish={publish} />)
    write.find('.publish').simulate('click')
   it('should publish on click', () => {
      expect(publish.calledOnce).toBe(true)
    })
  })
})
