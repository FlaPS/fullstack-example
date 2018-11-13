"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_saga_1 = require("redux-saga");
var utils_1 = require("@sha/utils");
var reducer_1 = require("./reducer");
var history_1 = require("history");
var connected_react_router_1 = require("connected-react-router");
var history = history_1.createMemoryHistory();
var REDUX_DEV_TOOLS = '__REDUX_DEVTOOLS_EXTENSION__';
exports.configureFrontendStore = function (initialState) {
    // @ts-ignore
    var store = redux_1.createStore(reducer_1.default(history), initialState, getFrontEndMiddlewares());
    /*if (frontConfig.env === 'storybook')
         biz.seedBiz(store)
    else {*/
    store['runSaga'] = sagaMiddleware.run;
    // store['runSaga']()
    // }
    return store;
};
var sagaMiddleware = redux_saga_1.default();
var getFrontEndMiddlewares = function () {
    return utils_1.isFrontend() && window[REDUX_DEV_TOOLS] ?
        redux_1.compose(redux_1.applyMiddleware(sagaMiddleware, connected_react_router_1.routerMiddleware(history)), window[REDUX_DEV_TOOLS]())
        :
            redux_1.compose(redux_1.applyMiddleware(sagaMiddleware, connected_react_router_1.routerMiddleware(history)));
};
//# sourceMappingURL=configureStore.js.map