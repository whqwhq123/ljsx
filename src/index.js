import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

import './assets/styles/reset.css'

import store from './store/index';


ReactDom.render(
  <Router>
    <Provider store={store}>
      <App></App>
    </Provider>
  </Router>,
  document.querySelector('#root')
)