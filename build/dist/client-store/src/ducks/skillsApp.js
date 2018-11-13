"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fsa = require("@sha/fsa");
var redux_1 = require("redux");
var factory = fsa.actionCreatorFactory('skillsApp');
var actions = {
    fetchUsers: factory.async('fetchUsers'),
    fetchProfile: factory.async('fetchProfile'),
    setConfig: factory('setConfig'),
};
var reducer = redux_1.combineReducers({
    users: actions.fetchUsers.asyncReducer,
    profile: actions.fetchProfile.asyncReducer,
    config: actions.setConfig.payloadReducer,
});
exports.skillsAppDuck = {
    reducer: reducer,
    actions: actions,
    factory: factory,
};
//# sourceMappingURL=skillsApp.js.map