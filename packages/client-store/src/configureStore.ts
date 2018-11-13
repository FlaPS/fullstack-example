import {applyMiddleware, compose, createStore} from 'redux'

import createSagaMiddleware from 'redux-saga'
import {isFrontend} from '@sha/utils'
import createRootReducer from './reducer'
import { createMemoryHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'


const history = createMemoryHistory()


const REDUX_DEV_TOOLS = '__REDUX_DEVTOOLS_EXTENSION__'


export const configureFrontendStore = (initialState?: any) => {
    // @ts-ignore
    const store =  createStore(createRootReducer(history), initialState, getFrontEndMiddlewares())


    /*if (frontConfig.env === 'storybook')
         biz.seedBiz(store)
    else {*/
    store['runSaga'] = sagaMiddleware.run
    // store['runSaga']()
    // }
    return store as typeof store & {runSaga: Function}
}

const sagaMiddleware = createSagaMiddleware()


const getFrontEndMiddlewares = () =>
    isFrontend() && window[REDUX_DEV_TOOLS] ?
        compose(
            applyMiddleware(sagaMiddleware, routerMiddleware(history)),
            window[REDUX_DEV_TOOLS](),
        )
        :
        compose(
            applyMiddleware(sagaMiddleware, routerMiddleware(history)),
        )
