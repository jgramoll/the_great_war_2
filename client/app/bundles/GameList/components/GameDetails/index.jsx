import React from 'react'
import createReactClass from 'create-react-class'
import css from './index.scss'
import Header from '../Header'
import gameSchema from '../../schemas/game'
import { injectIntl, intlShape } from 'react-intl'
import { Link } from 'react-router'
import { defaultMessages } from 'libs/i18n/default'

const GameDetails = createReactClass({
  render () {
    const { intl, game } = this.props

    return (
      <div>
        <Header intl={intl} />
        <h1 className={css.gameTitle}>{game.name}</h1>
        <Link to={`/the_great_war/${game.id}`}>
          {intl.formatMessage(defaultMessages.join)}
        </Link>
      </div>
    )
  }
})

GameDetails.propTypes = {
  intl: intlShape.isRequired,
  game: gameSchema.isRequired
}

export default injectIntl(GameDetails)
