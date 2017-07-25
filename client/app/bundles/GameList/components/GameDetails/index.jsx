import React from 'react'
import createReactClass from 'create-react-class'
import css from './index.scss'
import Header from '../Header'
import gameSchema from '../../schemas/game'
import { injectIntl, intlShape } from 'react-intl'
import { Link } from 'react-router'
import { defaultMessages } from 'libs/i18n/default'

const GameDetails = createReactClass({
  // TODO should this be somewhere else?
  componentDidMount () {
    const { game, fetchGame, params: { id: gameUrl } } = this.props
    if (!game) fetchGame(atob(gameUrl), this.props.intl)
  },

  render () {
    const { intl, game } = this.props
    if (!game) return null

    return (
      <div>
        <Header intl={intl} />
        <h1 className={css.gameTitle}>{game.title}</h1>
        <Link to={`/the_great_war/${btoa(game.links.self.href)}`}>
          {intl.formatMessage(defaultMessages.join)}
        </Link>
      </div>
    )
  }
})

GameDetails.propTypes = {
  intl: intlShape.isRequired,
  game: gameSchema
}

export default injectIntl(GameDetails)
