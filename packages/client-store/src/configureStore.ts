import {applyMiddleware, compose, createStore} from 'redux'

import createSagaMiddleware from 'redux-saga'
import {isFrontend} from '@sha/utils'
import createRootReducer from './reducer'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import rootSaga from './sagas/'
const REDUX_DEV_TOOLS = '__REDUX_DEVTOOLS_EXTENSION__'


export const configureFrontendStore = (
    initialState?: any,
    history: ReturnType<typeof createBrowserHistory> =  createBrowserHistory(),
    ) => {
    // @ts-ignore
    const store =  createStore(createRootReducer(history), initialState, getFrontEndMiddlewares(history))


    /*if (frontConfig.env === 'storybook')
         biz.seedBiz(store)
    else {*/
    store['runSaga'] = sagaMiddleware.run
    store['runSaga'](rootSaga)

    // }
    return store as typeof store & {runSaga: Function, history: any}
}

const sagaMiddleware = createSagaMiddleware()


const getFrontEndMiddlewares = (history: any) =>
    isFrontend() && window[REDUX_DEV_TOOLS] ?
        compose(

            applyMiddleware(routerMiddleware(history), sagaMiddleware),
            window[REDUX_DEV_TOOLS](),
        )
        :
        compose(
            applyMiddleware(routerMiddleware(history), sagaMiddleware),
        )
