import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import GameRow from './GameRow'
import css from './index.scss'
import gameSchema from '../../schemas/game'
import { injectIntl, intlShape } from 'react-intl'
import { Link } from 'react-router'
import { defaultMessages } from 'libs/i18n/default'

const GameList = createReactClass({
  componentDidMount () {
    const { gamesLoaded, fetchGames } = this.props

    if (!gamesLoaded) fetchGames(this.props.intl)
  },

  render () {
    const { intl, games } = this.props
    return (
      <div className={css['game-list']}>
        <h1>
          {intl.formatMessage(defaultMessages.games)}
        </h1>
        <ul>
          {games.map(this.renderGame)}
        </ul>
        <Link
          to="/games/new"
          activeClassName="active"
          className={css['game-list__new-game']}
        >
          {intl.formatMessage(defaultMessages.newGame)}
        </Link>
      </div>
    )
  },

  renderGame (game) {
    return (
      <GameRow
        key={game.links.self.href}
        game={game}
        selectGame={this.props.selectGame}
      />
    )
  }
})

GameList.propTypes = {
  intl: intlShape.isRequired,
  games: PropTypes.arrayOf(gameSchema).isRequired,
  gamesLoaded: PropTypes.bool.isRequired,
  selectGame: PropTypes.func.isRequired,
  fetchGames: PropTypes.func.isRequired
}

export default injectIntl(GameList)
