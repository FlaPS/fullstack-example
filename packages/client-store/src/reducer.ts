import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import {skillsAppDuck} from './ducks/skillsApp'
import {History} from 'history'

export default (history: History) => combineReducers({
    router: connectRouter(history),
    app: skillsAppDuck.reducer,
})
