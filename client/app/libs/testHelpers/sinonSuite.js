import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import sinon from 'sinon'

const initSinonSuite = function (suite, args) {
  const mockStore = configureMockStore([thunk])
  const sinonSuite = {}

  suite.beforeEach(function () {
    sinonSuite.server = sinon.fakeServer.create(args)
    sinonSuite.store = mockStore({})
  })

  suite.afterEach(function () {
    sinonSuite.server.restore()
  })

  return sinonSuite
}

export {
  initSinonSuite
}
