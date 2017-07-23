import Subject from '../index'
import { initSinonSuite } from 'libs/testHelpers/sinonSuite'

describe('libs::requestsManager', function () {
  const sinonSuite = initSinonSuite(this)

  describe('send', function () {
    it('sets method', function () {
      const method = 'POST'
      Subject.send(method)
      expect(sinonSuite.server.requests.length).to.eq(1)
      expect(sinonSuite.server.requests[0].method).to.eq(method)
    })

    it('sets path', function () {
      const url = '/api/data'
      Subject.send(null, url)
      expect(sinonSuite.server.requests.length).to.eq(1)
      expect(sinonSuite.server.requests[0].url).to.eq(url)
    })

    it('decamelizes body', function () {
      const body = {
        testProp: 1
      }
      Subject.send('POST', null, body)
      expect(sinonSuite.server.requests.length).to.eq(1)
      expect(sinonSuite.server.requests[0].requestBody).to.eq(JSON.stringify({
        test_prop: 1
      }))
    })

    describe('response', function () {
      beforeEach(function () {
        sinonSuite.server.configure({autoRespond: true})
      })

      it('is camelized', function () {
        sinonSuite.server.respondWith([200,
          { 'Content-Type': 'application/json' },
          '{ "prop_test": 1 }'
        ])

        return Subject.send('GET').then(function (response) {
          expect(response).to.eql({
            propTest: 1
          })
        })
      })

      it('rejected on unsuccessful request', function () {
        return Subject.send('GET').should.be.rejected
      })
    })
  })

  Array('post', 'get').forEach(function (method) {
    describe(method, function () {
      const upper = method.toUpperCase()
      it(`send ${upper} request`, function () {
        Subject[method]()
        expect(sinonSuite.server.requests.length).to.eq(1)
        expect(sinonSuite.server.requests[0].method).to.eq(upper)
      })
    })
  })
})
