"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var configureStore_1 = require("../configureStore");
var effects_1 = require("redux-saga/effects");
var connected_react_router_1 = require("connected-react-router");
var store;
beforeAll(function () { store = configureStore_1.configureFrontendStore(); store.runSaga(log); });
function log() {
    var a;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('running saga');
                _a.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                return [4 /*yield*/, effects_1.take('*')];
            case 2:
                a = _a.sent();
                console.log('action', a);
                debugger;
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
test('Check history action', function () {
    store.dispatch({ type: 'hi' });
    console.log('before', store.getState());
    store.dispatch(connected_react_router_1.replace('location/conva#horror'));
    console.log('after', store.getState());
});
//# sourceMappingURL=router.test.js.map