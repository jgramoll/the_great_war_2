import asyncRoute from 'libs/asyncRoute'

export default {
  ...asyncRoute('games', () => System.import('../startup/GameListApp')),

  indexRoute: asyncRoute(null, () => System.import('../containers/gameListContainer')),

  childRoutes: [
    asyncRoute('new', () => System.import('../containers/newGameContainer')),
    asyncRoute(':id', () => System.import('../containers/gameDetailsContainer'))
  ]
}
