import React from 'react'
import MainCoreApp from './MainCoreApp'

import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import ru from 'react-intl/locale-data/ru'

import ReactDOM from 'react-dom'

// Initizalize all locales for react-intl.
addLocaleData([...en, ...ru])

ReactDOM.render(
  <MainCoreApp />, document.getElementById('react-root')
)
