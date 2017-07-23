import React from 'react'
import { Provider } from 'react-redux'

function BasicApp (routerStore) {
  return (props) => {
    return (
      <Provider store={routerStore}>
        {props.children}
      </Provider>
    )
  }
}
export default BasicApp
