
import React from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'

export default props =>(
    <Switch>
        {
            props.routers.map((item,key)=>{
                if(item.to) return <Redirect key={key} from={item.from} to={item.to}/>
                return <Route key={key} path={item.path} render={ routes => <item.component {...routes} routers={item.children} /> } />
            })
        }
    </Switch>
)

