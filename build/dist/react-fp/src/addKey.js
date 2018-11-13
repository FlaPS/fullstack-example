"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.default = (function (Comp, key) {
    return function (props) {
        return React.createElement(Comp, Object.assign({ key: key ? props[key] : JSON.stringify(props) }, props));
    };
});
//# sourceMappingURL=addKey.js.map