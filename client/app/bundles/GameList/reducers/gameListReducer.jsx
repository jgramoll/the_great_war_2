import * as actionTypes from '../constants/gameListContants'

export const $$initialState = {
  $$games: [],
  gamesLoaded: false,
  selectedGame: null,
  fetchGameError: null,
  submitGameError: null,
  isFetching: false,
  isSaving: false
}

export default function gameListReducer ($$state = $$initialState, action) {
  switch (action.type) {
    case actionTypes.SET_IS_FETCHING: {
      return Object.assign({}, $$state, {
        isFetching: true
      })
    }

    case actionTypes.SET_IS_SAVING: {
      return Object.assign({}, $$state, {
        isSaving: true
      })
    }

    case actionTypes.FETCH_GAMES_SUCCESS: {
      return Object.assign({}, $$state, {
        $$games: action.games,
        fetchGameError: null,
        gamesLoaded: true,
        isFetching: false
      })
    }

    case actionTypes.FETCH_GAMES_FAILURE: {
      return Object.assign({}, $$state, {
        fetchGameError: action.error,
        isFetching: false
      })
    }

    case actionTypes.SUBMIT_GAME_SUCCESS: {
      return Object.assign({}, $$state, {
        isSaving: false,
        submitGameError: null,
        $$games: [action.game].concat($$state.$$games)
      })
    }

    case actionTypes.SUBMIT_GAME_FAILURE: {
      return Object.assign({}, $$state, {
        submitGameError: action.error,
        isSaving: false
      })
    }

    case actionTypes.SELECT_GAME: {
      return Object.assign({}, $$state, {
        selectedGame: action.game
      })
    }

    default:
      return $$state
  }
}
