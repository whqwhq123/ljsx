import React, { Component } from 'react'
import routers from './router/Router.config'
import RouterViews from './router/Router.view'
export default class App extends Component{
    render(){
      return (
       <RouterViews routers={routers}/>
      )
    }
}
