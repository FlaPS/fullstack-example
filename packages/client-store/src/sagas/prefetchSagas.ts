import {put, select, call, fork, takeLatest, takeEvery} from 'redux-saga/effects'
import {skillsAppDuck} from '../ducks/skillsApp'
import {FrontState} from '../reducer'
import {Api, default as apiFactory} from '../api'
import nav, {LocationAction} from '../nav'
import {isFrontend, trace} from '@sha/utils'
import {Profile} from '@local/value-types'
import {FactoryAction} from '@sha/fsa'

const {fetchUsers, fetchProfile, updateProfile} = skillsAppDuck.actions

const createSagas = (api: Api) => ({
    fetchUsersList:
        function* fetchUsersList() {
            yield put(fetchUsers.started(undefined))
            const {result, errors} = yield call(api.getAllUsers)
            console.log(fetchUsers.done({result}))
            console.log(fetchUsers.failed({
                error: JSON.stringify(errors),
            }))
            if (result)
                yield put(fetchUsers.done({result}))
            else
                yield put(fetchUsers.failed({
                    error: JSON.stringify(errors),
                }))
        },
    fetchProfile:
        function* fetchUsersList(action: LocationAction<any>) {
            const {params} = nav.profile.match(action.payload.location.pathname)!
            yield put(fetchProfile.started(params))
            const {result, errors} = yield call(api.getProfile, params)
            if (result)
                yield put(fetchProfile.done({result}))
            else
                yield put(fetchProfile.failed({
                    params,
                    error: JSON.stringify(errors),
                }))
        },
    patchProfile:
        function* patchProfile(action: FactoryAction<Profile>) {
            yield call(api.patchProfile, action.payload)
        },

})


export default function* prefetchSaga() {
    const config = yield select<FrontState>( (state: FrontState) => state.app ? state.app.config : undefined)

    const api = apiFactory(config ? config.gateway : undefined)

    const sagas = createSagas(api)

    yield takeLatest(trace('check fetch users')(nav.index.isType), sagas.fetchUsersList)
    yield takeLatest(trace('check fetch Profile', 'warn')(nav.profile.isType), sagas.fetchProfile)
    yield takeLatest(trace('update', 'warn')(updateProfile.isType), sagas.patchProfile)
    const pathname = isFrontend() ? window.location.pathname : nav.index.pattern
    //yield put({type: 'LOCATION_CHANGE', payload: {location: {pathname}, action: 'POP'}})
}
