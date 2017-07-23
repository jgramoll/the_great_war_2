import React from 'react'
// import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
// import css from './index.scss'
import { injectIntl, intlShape } from 'react-intl'
import { Link } from 'react-router'
import { defaultMessages } from 'libs/i18n/default'

const TheGreatWar = createReactClass({
  render () {
    const { intl } = this.props
    return (
      <div>
        <header>
          <Link
            to="/games"
            activeClassName="active"
          >
            {intl.formatMessage(defaultMessages.games)}
          </Link>
        </header>
        <h1>
          {intl.formatMessage(defaultMessages.theGreatWar)}
        </h1>
      </div>
    )
  }
})

TheGreatWar.propTypes = {
  intl: intlShape.isRequired
}

export default injectIntl(TheGreatWar)
