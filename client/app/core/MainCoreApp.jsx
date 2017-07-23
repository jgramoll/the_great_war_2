import React from 'react'
import routes from './routes'
import { translations } from 'libs/i18n/translations'
import { defaultLocale } from 'libs/i18n/default'
import { IntlProvider } from 'react-intl'
import { Router, browserHistory } from 'react-router'

const MainCoreApp = (props, _railsContext) => {
  const locale = defaultLocale
  const messages = translations[locale]
  return (
    <IntlProvider locale={locale} key={locale} messages={messages}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </IntlProvider>
  )
}

export default MainCoreApp
