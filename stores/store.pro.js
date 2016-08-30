import {
    createStore,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
//import api from '../middleware/api'
import rootReducer from '../reducers'

export default function store(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk)
    )
}
