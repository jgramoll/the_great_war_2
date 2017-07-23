import { applyMiddleware, createStore, combineReducers } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

function RouterStore (reducers, initialState) {
  // https://github.com/reactjs/react-router-redux
  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
  })

  const reduxRouterMiddleware = routerMiddleware(browserHistory)

  // Sync dispatched route actions to the history
  const finalCreateStore = applyMiddleware(
    thunkMiddleware,
    reduxRouterMiddleware
  )(createStore)
  return finalCreateStore(reducer, initialState)
}

export default RouterStore
