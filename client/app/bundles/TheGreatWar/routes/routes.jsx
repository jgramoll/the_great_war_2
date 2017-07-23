import asyncRoute from 'libs/asyncRoute'

export default {
  ...asyncRoute('the_great_war', () => System.import('../startup/TheGreatWarApp')),

  childRoutes: [
    asyncRoute(':id', () => System.import('../containers/theGreatWarContainer'))
  ]
}
