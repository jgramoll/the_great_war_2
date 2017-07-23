import Subject, { $$initialState } from '../theGreatWarReducer'
// import * as actionTypes from '../../constants/theGreatWarConstants'

describe('TheGreatWar::reducers::theGreatWarReducer', function () {
  it('uses default state', function () {
    expect(Subject(undefined, {})).to.eq($$initialState)
  })

  it('returns state by default', function () {
    expect(Subject($$initialState, {})).to.eq($$initialState)
  })
})
