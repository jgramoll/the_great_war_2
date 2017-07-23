import theGreatWarReducer, { $$initialState as $$theGreatWarState } from './theGreatWarReducer'

export default {
  $$theGreatWarStore: theGreatWarReducer
}

export const initialStates = {
  $$theGreatWarStore: $$theGreatWarState
}
