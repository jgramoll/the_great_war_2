import ReactOnRails from 'react-on-rails'
import 'whatwg-fetch'

import { camelizeKeys, decamelizeKeys } from 'humps'
import { flow } from 'lodash'

/**
 * send data request
 * This method does a number of helpful things:
 *   Adds auth header
 *   Adds json content type
 *   decamelize request
 *   camelize response
 *
 * @returns {Promise} - Result of request.
 */
function send (method, path, body) {
  return fetch(path, {
    method,
    credentials: 'include',
    headers: ReactOnRails.authenticityHeaders({
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }),
    body: formatBody(body)
  }).then(function (response) {
    if (response.ok) {
      return response.json().then(g => camelizeKeys(g))
    }
    return Promise.reject(new Error(response.status))
  })
}

function formatBody (body) {
  return flow(decamelizeKeys, JSON.stringify)(body)
}

export default {
  send,
  post: send.bind(null, 'POST'),
  get: send.bind(null, 'GET')
}
