import React from 'react'
import Subject from '../index'
import ReactTestUtils from 'react-dom/test-utils'
import sinon from 'sinon'
import { drill } from 'react-drill'
import { IntlProvider } from 'react-intl'

describe('GameList::components::GameList', function () {
  const games = [
    {
      id: '1',
      name: 'First Game'
    },
    {
      id: '2',
      name: 'Best Game'
    },
    {
      id: '3',
      name: 'Worst Game'
    }
  ]
  const intlProvider = new IntlProvider({locale: 'en'})
  const { intl } = intlProvider.getChildContext()

  function renderSubject (props) {
    return ReactTestUtils.renderIntoDocument(
      <Subject.WrappedComponent
        intl={intl}
        games={games}
        gamesLoaded={true}
        selectGame={Function.prototype}
        fetchGames={Function.prototype}
        {...props}
      />
    )
  }

  it('renders game rows', function () {
    const subject = renderSubject()
    expect(drill(subject).find('li').nodes.length).to.eq(3)
  })

  context('games not loaded', function () {
    it('fetches games', function () {
      const subject = renderSubject({
        gamesLoaded: false,
        fetchGames: sinon.stub()
      })

      expect(subject.props.fetchGames.called).to.be.true
    })
  })
})
