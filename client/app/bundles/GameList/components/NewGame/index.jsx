import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import css from './index.scss'
import Header from '../Header'
import { injectIntl, intlShape } from 'react-intl'
import { defaultMessages } from 'libs/i18n/default'

const NewGame = createReactClass({
  render () {
    const { intl, submitGameError } = this.props
    return (
      <div>
        <Header intl={intl} />
        <form className={css['new-game-form']}>
          <h1>{intl.formatMessage(defaultMessages.newGame)}</h1>
          <label htmlFor="title">
            {intl.formatMessage(defaultMessages.name)}
          </label>
          <input
            className={css['new-game-form__title-input']}
            ref={elm => { this.title = elm } }
            id="title"
          />
          <div className={css['new-game-form__create-game-error']}>
            {submitGameError}
          </div>
          <div>
            <input
              type="submit"
              className={css['new-game-form__submit']}
              value={intl.formatMessage(defaultMessages.create)}
              onClick={this._submitCreateGame}
            />
          </div>
        </form>
      </div>
    )
  },

  _submitCreateGame (e) {
    const { intl, createGame, submitGameFailure } = this.props
    e.preventDefault()

    const title = this.title.value
    if (title) {
      createGame({ title, gameType: 'demo' }, intl)
    } else {
      // TODO rename this when i18n recompiles
      const error = intl.formatMessage(defaultMessages.missingName)
      submitGameFailure(error)
    }
  }
})

NewGame.propTypes = {
  intl: intlShape.isRequired,
  submitGameError: PropTypes.string,
  createGame: PropTypes.func.isRequired,
  submitGameFailure: PropTypes.func.isRequired
}

export default injectIntl(NewGame)
