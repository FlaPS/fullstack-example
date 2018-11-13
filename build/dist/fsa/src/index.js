"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.factoryDelimeter = '/';
exports.reducerFactory = function (reducer) {
    return function (selector) {
        return function (state, action) {
            return selector(action) ? reducer(state, action) : state;
        };
    };
};
exports.isType = function (actionCreator) {
    return function (action) {
        return action.type === actionCreator['type'];
    };
};
exports.isTypeOfAny = function (actionCreator) {
    return function (action) {
        return actionCreator.some(function (creator) { return creator.type === action.type; });
    };
};
exports.isHasCreatorFactory = function (acf) {
    return acf && acf['factory'];
};
exports.isNamespace = function (actionFactory) {
    return function (action) {
        return exports.isHasCreatorFactory(actionFactory)
            ? action.type.startsWith(actionFactory.factory.base)
            : action.type.startsWith(actionFactory.base);
    };
};
function actionCreatorFactory(prefix, factoryMeta, defaultIsError) {
    if (factoryMeta === void 0) { factoryMeta = {}; }
    if (defaultIsError === void 0) { defaultIsError = function (p) { return p instanceof Error; }; }
    var actionTypes = {};
    var base = prefix ? "" + prefix + exports.factoryDelimeter : '';
    function actionCreator(type, commonMeta, isError) {
        if (isError === void 0) { isError = defaultIsError; }
        var fullType = base + type;
        if (process.env.NODE_ENV !== 'production') {
            if (actionTypes[fullType])
                throw new Error("Duplicate action types   : " + fullType);
            actionTypes[fullType] = true;
        }
        var creator = Object.assign(function (payload, meta) {
            var action = {
                type: fullType,
                payload: payload,
            };
            if (commonMeta || meta || factoryMeta)
                action.meta = Object.assign({}, factoryMeta, commonMeta, meta);
            if (isError && (typeof isError === 'boolean' || isError(payload)))
                action.error = true;
            return action;
        }, {
            reduce: function (f) { return f; },
            type: fullType,
            base: base,
        });
        var reduce = function (reducer) {
            // @ts-ignore
            return exports.reducerFactory(reducer)(isType(creator));
        };
        var isType = function (action) { return action.type && action.type === fullType; };
        var handler = function (payload) { return ({}); };
        var result = Object.assign(creator, { example: {} }, {
            reduce: reduce,
            handler: handler,
            isType: isType,
            payloadReducer: function (_, action) {
                if (_ === void 0) { _ = {}; }
                return isType(action)
                    ? action.payload
                    : _;
            },
        });
        return result;
    }
    function asyncActionCreators(type, commonMeta) {
        var started = actionCreator(type + "_STARTED", commonMeta, false);
        var done = actionCreator(type + "_DONE", commonMeta, false);
        var failed = actionCreator(type + "_FAILED", commonMeta, true);
        return {
            type: base + type,
            started: started,
            done: done,
            failed: failed,
            asyncReducer: reducerWithInitialState({})
                .case(started, function (state, payload) {
                return ({ value: undefined, error: undefined, status: 'started', params: payload });
            })
                .case(done, function (state, payload) {
                return ({ value: payload.result, error: undefined, status: 'done', params: payload.params });
            })
                .case(failed, function (state, payload) {
                return ({ value: undefined, error: payload.error, status: 'failed', params: payload.params });
            }),
        };
    }
    return Object.assign(actionCreator, { async: asyncActionCreators, base: base });
}
exports.actionCreatorFactory = actionCreatorFactory;
function reducerWithInitialState(initialValue) {
    return makeReducer([], initialValue);
}
exports.reducerWithInitialState = reducerWithInitialState;
function reducerWithoutInitialState() {
    return makeReducer([]);
}
exports.reducerWithoutInitialState = reducerWithoutInitialState;
function upcastingReducer() {
    return makeReducer([]);
}
exports.upcastingReducer = upcastingReducer;
function makeReducer(cases, initialValue) {
    var reducer = (function (state, action) {
        if (state === void 0) { state = initialValue; }
        for (var i = 0, length_1 = cases.length; i < length_1; i++) {
            var _a = cases[i], actionCreator = _a.actionCreator, handler = _a.handler;
            if (exports.isType(actionCreator)(action))
                return Object.assign({}, { state: state }, tslib_1.__assign({}, handler(state, action.payload)));
        }
        return state;
    });
    // @ts-ignore
    reducer.case = function (actionCreator, handler) {
        return makeReducer(cases.concat([{ actionCreator: actionCreator, handler: handler }]), initialValue);
    };
    return reducer;
}
//# sourceMappingURL=index.js.map