"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var connected_react_router_1 = require("connected-react-router");
var skillsApp_1 = require("./ducks/skillsApp");
exports.default = (function (history) { return redux_1.combineReducers({
    router: connected_react_router_1.connectRouter(history),
    app: skillsApp_1.skillsAppDuck.reducer,
}); });
//# sourceMappingURL=reducer.js.map