"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var ui_1 = require("@local/ui");
var clientStore = require("@local/client-store");
console.log('clientStore', clientStore);
var store = clientStore.configureFrontendStore();
exports.default = (function (props) {
    return React.createElement(react_redux_1.Provider, { store: store },
        React.createElement("div", { className: 'App' },
            React.createElement("header", { className: 'App-header' },
                React.createElement("img", { className: 'App-logo', alt: 'logo' }),
                React.createElement("h1", { className: 'App-title' }, "Welcome to React")),
            React.createElement("p", { className: 'App-intro' },
                "To get started, edit ",
                React.createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            "Ba-bah!",
            React.createElement(ui_1.Counter, null)));
});
//# sourceMappingURL=App.js.map