import React from 'react'
import Subject from '../GameRow'
import ReactTestUtils from 'react-dom/test-utils'
import sinon from 'sinon'
import { drill, m } from 'react-drill'
import { Router, Route, createMemoryHistory } from 'react-router'

describe('GameList::components::GameList::GameRow', function () {
  const game = {
    name: 'Best Game',
    gameType: 'demo'
  }

  const selectGame = sinon.stub()
  const SubjectWrapper = () => (
    <Subject
      game={game}
      selectGame={selectGame}
    />
  )
  const subject = ReactTestUtils.renderIntoDocument(
    <Router history={createMemoryHistory('/')}>
      <Route path="/" component={SubjectWrapper} />
    </Router>
  )

  Array('name', 'gameType').forEach(function (field) {
    it(`renders game ${field}`, function () {
      expect(drill(subject).has('h2', m.hasText(game[field]))).to.be.true
    })
  })

  describe('selecting game', function () {
    it('calls selectGame', function () {
      drill(subject).find('a', m.hasText(game.name)).click()
      sinon.assert.calledWith(selectGame, game)
    })
  })
})
