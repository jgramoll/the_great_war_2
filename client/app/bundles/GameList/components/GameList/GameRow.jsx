import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import { Link } from 'react-router'
import css from './GameRow.scss'
import gameSchema from '../../schemas/game'

const GameRow = createReactClass({
  render () {
    const { game } = this.props
    return (
      <li className={css['game-row']}>
        <h2>
          <Link className={css['game-row__title']}
            to={game.links.self.href}
            onClick={this._setSelectedGame}
          >
            {game.title}
          </Link>
        </h2>
      </li>
    )
  },

  _setSelectedGame () {
    const { selectGame, game } = this.props
    selectGame(game)
  }
})

GameRow.propTypes = {
  game: gameSchema.isRequired,
  selectGame: PropTypes.func.isRequired
}

export default GameRow
