import Subject, { $$initialState } from '../gameListReducer'
import * as actionTypes from '../../constants/gameListContants'

describe('NewGame::reducers::gameListReducer', function () {
  const game = { id: '1' }
  const games = [game]
  const existingGame = { id: '2' }

  it('uses default state', function () {
    expect(Subject(undefined, {})).to.eq($$initialState)
  })

  it('returns state by default', function () {
    expect(Subject($$initialState, {})).to.eq($$initialState)
  })

  Array(
    { type: 'SET_IS_FETCHING', prop: 'isFetching' },
    { type: 'SET_IS_SAVING', prop: 'isSaving' }
  ).forEach(setsState)

  Array(
    {
      successType: actionTypes.FETCH_GAMES_SUCCESS,
      successParam: { games },
      successResult: games,
      resets: 'isFetching',
      failureType: actionTypes.FETCH_GAMES_FAILURE,
      failureProp: 'fetchGameError'
    },
    {
      successType: actionTypes.SUBMIT_GAME_SUCCESS,
      successParam: { game },
      successResult: [game, existingGame],
      resets: 'isSaving',
      failureType: actionTypes.SUBMIT_GAME_FAILURE,
      failureProp: 'submitGameError'
    }
  ).forEach(actsLikeAction)

  describe('SELECT_GAME', function () {
    const game = {id: '1'}
    const action = {
      type: actionTypes.SELECT_GAME,
      game
    }

    it('sets selectedGame', function () {
      expect(Subject($$initialState, action).selectedGame)
        .to.eql(game)
    })
  })

  function state (attrs) {
    return Object.assign({}, $$initialState, attrs)
  }

  function setsState ({type, prop}) {
    describe(type, function () {
      it(`sets ${prop}`, function () {
        expect(Subject($$initialState, { type })[prop]).to.eql(true)
      })
    })
  }

  function actsLikeAction (action) {
    describe(action.successType, function () {
      const props = Object.assign({}, {
        type: action.successType
      }, action.successParam)

      resetsState(action.resets, props)

      it('resolves prop', function () {
        expect(Subject(state({$$games: [existingGame]}), props).$$games)
          .to.eql(action.successResult)
      })
    })

    describe(action.failureType, function () {
      const error = 'bad'
      const props = {
        type: action.failureType,
        error
      }

      resetsState(action.resets, props)

      it(`sets ${action.failureProp}`, function () {
        expect(Subject($$initialState, props)[action.failureProp])
          .to.eql(error)
      })
    })
  }

  function resetsState (prop, action) {
    it(`resets ${state}`, function () {
      expect(Subject(state({[prop]: true}), action)[prop])
        .to.eql(false)
    })
  }
})
