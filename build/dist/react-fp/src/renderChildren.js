"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ramda_1 = require("ramda");
/**
 *
 * @param children
 * @param props
 */
exports.default = (function (children, props) {
    var omitedProps = props
        ? (children === props.children ? ramda_1.omit(['children'], props) : props)
        : {};
    return typeof children === 'function'
        ? React.createElement(children, omitedProps)
        : children;
});
//# sourceMappingURL=renderChildren.js.map