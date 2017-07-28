import * as actionTypes from '../constants/gameListContants'
import requestsManager from 'libs/requestsManager'
import { push } from 'react-router-redux'
import { defaultMessages } from 'libs/i18n/default'

export function setIsFetching () {
  return {
    type: actionTypes.SET_IS_FETCHING
  }
}

export function clearIsFetching () {
  return {
    type: actionTypes.CLEAR_IS_FETCHING
  }
}

export function setIsSaving () {
  return {
    type: actionTypes.SET_IS_SAVING
  }
}

export function fetchGameSuccess (game) {
  return {
    type: actionTypes.FETCH_GAME_SUCCESS,
    game: game
  }
}

export function fetchGamesSuccess (games) {
  return {
    type: actionTypes.FETCH_GAMES_SUCCESS,
    games: games
  }
}

export function fetchGamesFailure (error) {
  return {
    type: actionTypes.FETCH_GAMES_FAILURE,
    error
  }
}

export function submitGameSuccess (game) {
  return {
    type: actionTypes.SUBMIT_GAME_SUCCESS,
    game
  }
}

export function submitGameFailure (error) {
  return {
    type: actionTypes.SUBMIT_GAME_FAILURE,
    error
  }
}

export function selectGame (game) {
  return {
    type: actionTypes.SELECT_GAME,
    game
  }
}

export function fetchGame (gameUrl, intl) {
  return (dispatch) => {
    dispatch(setIsFetching())
    return requestsManager.get(gameUrl)
      .then(result => {
        dispatch(selectGame(result))
        dispatch(clearIsFetching())
      })
      .catch(_error => {
        const message = intl.formatMessage(defaultMessages.somethingWentWrong)
        dispatch(fetchGamesFailure(message))
      })
  }
}

export function fetchGames (intl) {
  return (dispatch) => {
    dispatch(setIsFetching())
    // TODO get api path state
    return requestsManager.get('/api/games')
      .then(result => {
        dispatch(fetchGamesSuccess(result.embedded.games))
      })
      .catch(_error => {
        const message = intl.formatMessage(defaultMessages.somethingWentWrong)
        dispatch(fetchGamesFailure(message))
      })
  }
}

export function createGame (game, intl) {
  return (dispatch) => {
    dispatch(setIsSaving())
    return requestsManager.post('/api/games', game)
      .then(game => {
        dispatch(submitGameSuccess(game))
        dispatch(push('/games'))
      })
      .catch(_error => {
        const message = intl.formatMessage(defaultMessages.somethingWentWrong)
        dispatch(submitGameFailure(message))
      })
  }
}
