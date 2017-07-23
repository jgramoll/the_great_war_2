import React from 'react'
import Subject from '../index'
import ReactTestUtils from 'react-dom/test-utils'
import { drill, m } from 'react-drill'
import { IntlProvider } from 'react-intl'

describe('GameList::components::GameDetails', function () {
  const intlProvider = new IntlProvider({locale: 'en'})
  const { intl } = intlProvider.getChildContext()
  const game = {
    name: 'Best Game',
    gameType: 'demo'
  }

  const subject = ReactTestUtils.renderIntoDocument(
    <Subject.WrappedComponent
      intl={intl}
      game={game}
    />
  )

  it('renders game name', function () {
    expect(drill(subject).has('h1', m.hasText(game.name))).to.be.true
  })
})
