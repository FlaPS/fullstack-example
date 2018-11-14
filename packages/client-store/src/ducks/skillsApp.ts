import {User, Profile} from '@local/value-types/index'
import * as fsa from '@sha/fsa'
import {combineReducers} from 'redux'
import {FactoryAction} from '@sha/fsa'

export type ConfigState = {
    gateway?: string
}

const factory = fsa.actionCreatorFactory('skillsApp')

const actions = {
    fetchUsers: factory.async<undefined, User[]>('fetchUsers'),
    fetchProfile: factory.async<{id: string}, Profile>('fetchProfile'),
    setConfig: factory<ConfigState>('setConfig'),
    updateProfile: factory<Profile>('updateProfile'),
}

const reducer = combineReducers({
    users: actions.fetchUsers.asyncReducer,
    profile: actions.fetchProfile.asyncReducer
        .case(  actions.updateProfile, (state, payload) =>
                    ({
                        ...state,
                        value: payload,
                    }),
            ),
    config: actions.setConfig.payloadReducer,
})

export type AppState = ReturnType<typeof reducer>

export const skillsAppDuck = {
    reducer,
    actions,
    factory,
}
