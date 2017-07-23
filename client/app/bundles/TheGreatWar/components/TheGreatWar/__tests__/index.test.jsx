import React from 'react'
import Subject from '../index'
import ReactTestUtils from 'react-dom/test-utils'
import { drill, m } from 'react-drill'
import { IntlProvider } from 'react-intl'

describe('TheGreatWar::components::TheGreatWar', function () {
  const intlProvider = new IntlProvider({locale: 'en'})
  const { intl } = intlProvider.getChildContext()

  function renderSubject (props) {
    return ReactTestUtils.renderIntoDocument(
      <Subject.WrappedComponent
        intl={intl}
        {...props}
      />
    )
  }

  it('renders games link', function () {
    const subject = renderSubject()
    expect(drill(subject).has('a', m.hasText('Games'))).to.be.true
  })
})
