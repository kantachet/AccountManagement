import React from 'react'
import {Route, IndexRoute} from 'react-router'
import app from './app'
import account from './account'
import home from './home'
import about from './about'
export default(
    <Route path='/' component={app}>
        <IndexRoute component={home}/>
        <Route path='account' component={account.accountContainer}/>
        <Route path='about' component={about}/>
    </Route>
)
