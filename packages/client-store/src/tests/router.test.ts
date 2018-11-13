import {configureFrontendStore} from '../configureStore'
import {take} from 'redux-saga/effects'
import { replace} from 'connected-react-router'
let store: ReturnType<typeof configureFrontendStore>

beforeAll( () =>{ store = configureFrontendStore();        store.runSaga(log)})

function* log() {
    console.log('running saga')
    while(true) {
        const a = yield take('*')
        console.log('action', a)
        debugger
    }
}

test('Check history action', () => {
    store.dispatch({type: 'hi'})
        console.log('before', store.getState())

        store.dispatch(replace('location/conva#horror'))
        console.log('after', store.getState())
    }
)



