import './css/reset.css'
import './css/responsive.css'
import React from 'react'
import {render} from 'react-dom'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import Root from './root/root'
import configureStore from './stores/store'
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

var appInstance = render(
    <Root store={store} history={history}></Root>, document.getElementById('app'))

// if (module.hot) {
//     require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
//         getRootInstances: function() {
//             return [appInstance]
//         }
//     });s
// }
