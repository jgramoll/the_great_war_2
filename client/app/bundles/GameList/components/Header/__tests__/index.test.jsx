import Subject from '../index'
import ReactTestUtils from 'react-dom/test-utils'
import { drill, m } from 'react-drill'
import { IntlProvider } from 'react-intl'

describe('GameList::components::Header', function () {
  const intlProvider = new IntlProvider({locale: 'en'})
  const { intl } = intlProvider.getChildContext()

  const subject = ReactTestUtils.renderIntoDocument(
    Subject({intl})
  )

  it('renders games link', function () {
    expect(drill(subject).has('a', m.hasText('Games'))).to.be.true
  })
})
