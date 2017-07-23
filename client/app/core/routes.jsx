import gamesRoutes from '../bundles/GameList/routes/routes'
import theGreatWarRoutes from '../bundles/TheGreatWar/routes/routes'

export default {
  path: '/',

  childRoutes: [
    gamesRoutes,
    theGreatWarRoutes
  ]
}
