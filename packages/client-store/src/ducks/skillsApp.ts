import {User, Profile} from '@local/value-types/index'
import * as fsa from '@sha/fsa'
import {combineReducers} from 'redux'

export type ConfigState = {
    gateway?: string
}

const factory = fsa.actionCreatorFactory('skillsApp')

const actions = {
    fetchUsers: factory.async<undefined, User[]>('fetchUsers'),
    fetchProfile: factory.async<string, Profile>('fetchProfile'),
    setConfig: factory<ConfigState>('setConfig'),
}

const reducer = combineReducers({
    users: actions.fetchUsers.asyncReducer,
    profile: actions.fetchProfile.asyncReducer,
    config: actions.setConfig.payloadReducer,
})

export type AppState = ReturnType<typeof reducer>

export const skillsAppDuck = {
    reducer,
    actions,
    factory,
}
