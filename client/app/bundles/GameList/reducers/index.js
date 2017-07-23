import gameListReducer, { $$initialState as $$gamesState } from './gameListReducer'

export default {
  $$gamesStore: gameListReducer
}

export const initialStates = {
  $$gamesStore: $$gamesState
}
