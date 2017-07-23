import React from 'react'
import { intlShape } from 'react-intl'
import { Link } from 'react-router'
import { defaultMessages } from 'libs/i18n/default'

const Header = ({ intl }) => (
  <header>
    <Link to="/games">
      {intl.formatMessage(defaultMessages.games)}
    </Link>
  </header>
)

Header.propTypes = {
  intl: intlShape.isRequired
}

export default Header
