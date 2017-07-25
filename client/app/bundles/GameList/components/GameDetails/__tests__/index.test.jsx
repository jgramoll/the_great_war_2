import React from 'react'
import sinon from 'sinon'
import Subject from '../index'
import ReactTestUtils from 'react-dom/test-utils'
import { drill, m } from 'react-drill'
import { IntlProvider } from 'react-intl'

describe('GameList::components::GameDetails', function () {
  const intlProvider = new IntlProvider({locale: 'en'})
  const { intl } = intlProvider.getChildContext()
  const game = {
    id: '1',
    title: 'Best Game',
    gameType: 'demo',
    links: { self: '' }
  }

  function renderSubject (props) {
    return ReactTestUtils.renderIntoDocument(
      <Subject.WrappedComponent
        intl={intl}
        params={{ id: btoa(game.id) }}
        {...props}
      />
    )
  }

  it('fetches game', function () {
    const fetchGame = sinon.stub()
    renderSubject({ fetchGame })
    sinon.assert.calledWith(fetchGame, game.id)
  })

  context('given game', function () {
    it('renders game title', function () {
      const subject = renderSubject({ game })
      expect(drill(subject).has('h1', m.hasText(game.title))).to.be.true
    })
  })
})
