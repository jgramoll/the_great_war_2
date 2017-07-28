import React from 'react'
import Subject from '../index'
import sinon from 'sinon'
import ReactTestUtils from 'react-dom/test-utils'
import { drill, m } from 'react-drill'
import { IntlProvider } from 'react-intl'

describe('GameList::components::NewGame', function () {
  const intlProvider = new IntlProvider({locale: 'en'})
  const { intl } = intlProvider.getChildContext()

  function renderSubject (props) {
    return ReactTestUtils.renderIntoDocument(
      <Subject.WrappedComponent
        intl={intl}
        createGame={sinon.stub()}
        submitGameFailure={sinon.stub()}
        {...props}
      />
    )
  }

  describe('submit form', function () {
    it('calls createGame with name', function () {
      const subject = renderSubject()

      const title = 'Best eva'
      drill(subject).find('#title').fillIn(title)
      drill(subject).find('input[type="submit"]').click()
      sinon.assert.calledWith(subject.props.createGame, { title, gameType: 'demo' })
    })

    context('no title', function () {
      it('calls error function', function () {
        const subject = renderSubject()

        drill(subject).find('input[type="submit"]').click()
        expect(subject.props.submitGameFailure.called).to.be.true
      })
    })

    context('error', function () {
      it('renders error', function () {
        const submitGameError = 'missing name'
        const subject = renderSubject({submitGameError})

        expect(drill(subject).has('div', m.hasText(submitGameError))).to.be.true
      })
    })
  })
})
