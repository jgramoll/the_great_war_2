import * as Subject from '../gameListActionCreators'
import * as actionTypes from '../../constants/gameListContants'
import { push } from 'react-router-redux'
import { IntlProvider } from 'react-intl'
import { initSinonSuite } from 'libs/testHelpers/sinonSuite'

describe('NewGame::actions::gameListActionCreators', function () {
  const intlProvider = new IntlProvider({locale: 'en'})
  const { intl } = intlProvider.getChildContext()

  describe('setIsFetching', function () {
    returnsCorrectHash(Subject.setIsFetching(), {
      type: actionTypes.SET_IS_FETCHING
    })
  })

  describe('setIsSaving', function () {
    returnsCorrectHash(Subject.setIsSaving(), {
      type: actionTypes.SET_IS_SAVING
    })
  })

  describe('fetchGamesSuccess', function () {
    const games = [{id: '1'}]

    returnsCorrectHash(Subject.fetchGamesSuccess(games), {
      type: actionTypes.FETCH_GAMES_SUCCESS,
      games
    })
  })

  describe('fetchGamesFailure', function () {
    returnsError(
      Subject.fetchGamesFailure,
      actionTypes.FETCH_GAMES_FAILURE
    )
  })

  describe('submitGameFailure', function () {
    returnsError(
      Subject.submitGameFailure,
      actionTypes.SUBMIT_GAME_FAILURE
    )
  })

  Array(
    { subject: Subject.submitGameSuccess, type: actionTypes.SUBMIT_GAME_SUCCESS },
    { subject: Subject.selectGame, type: actionTypes.SELECT_GAME }
  ).forEach(function ({ subject, type }) {
    describe(subject.name, function () {
      const game = { id: '1' }

      returnsCorrectHash(subject(game), {
        type,
        game
      })
    })
  })

  describe('fetchGames', function () {
    const sinonSuite = initSinonSuite(this, {autoRespond: true})

    it('posts game content', function () {
      const games = [{id: '1'}]
      sinonSuite.server.respondWith('GET', '/games',
        [200, { 'Content-Type': 'application/json' },
          JSON.stringify(games)])

      const subject = Subject.fetchGames(intl)
      return sinonSuite.store.dispatch(subject).then(() => {
        expect(sinonSuite.store.getActions()).to.eql([
          { type: actionTypes.SET_IS_FETCHING },
          {
            type: actionTypes.FETCH_GAMES_SUCCESS,
            games
          }
        ])
      })
    })

    catchAndSetError(
      sinonSuite,
      ['GET', '/games'],
      Subject.fetchGames(intl),
      [
        { type: actionTypes.SET_IS_FETCHING },
        {
          type: actionTypes.FETCH_GAMES_FAILURE,
          error: 'Oops, something went wrong'
        }
      ]
    )
  })

  describe('createGame', function () {
    const sinonSuite = initSinonSuite(this, {autoRespond: true})

    it('posts game content', function () {
      const game = { id: '1' }

      sinonSuite.server.respondWith('POST', '/games',
        [200, { 'Content-Type': 'application/json' },
          JSON.stringify(game)])

      const subject = Subject.createGame({}, intl)
      return sinonSuite.store.dispatch(subject).then(() => {
        expect(sinonSuite.store.getActions()).to.eql([
          { type: actionTypes.SET_IS_SAVING },
          {
            type: actionTypes.SUBMIT_GAME_SUCCESS,
            game
          },
          push('/games')
        ])
      })
    })

    catchAndSetError(
      sinonSuite,
      ['POST', '/games'],
      Subject.createGame({}, intl),
      [
        { type: actionTypes.SET_IS_SAVING },
        {
          type: actionTypes.SUBMIT_GAME_FAILURE,
          error: 'Oops, something went wrong'
        }
      ]
    )
  })

  function catchAndSetError (sinonSuite, respondWith, subject, expected) {
    it('sets error', function () {
      sinonSuite.server.respondWith(...respondWith)

      return sinonSuite.store.dispatch(subject).then(() => {
        expect(sinonSuite.store.getActions()).to.eql(expected)
      })
    })
  }

  function returnsCorrectHash (subject, expected) {
    it('returns correct hash', function () {
      expect(subject).to.eql(expected)
    })
  }

  function returnsError (subject, type) {
    const error = 'error'
    it('returns error', function () {
      expect(subject(error)).to.eql({
        type,
        error
      })
    })
  }
})
