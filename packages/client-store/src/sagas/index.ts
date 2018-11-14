import {isBackend} from '@sha/utils'
import {put, fork} from 'redux-saga/effects'
import {skillsAppDuck} from '../ducks/skillsApp'
import prefetchSagas from './prefetchSagas'
import routeSaga from './routeSagas'

const defaultConfig = {
    gateway: isBackend() || window.location.hostname.includes('localhost')
        ? 'http://localhost:3001/graphql'
        : '/graphql',
}

export default function* mainSaga(config: typeof defaultConfig = defaultConfig) {


    yield put(skillsAppDuck.actions.setConfig(config))

    yield fork(prefetchSagas)
    yield fork(routeSaga)
}