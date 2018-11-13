"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ramda_1 = require("ramda");
var styled_components_1 = require("styled-components");
var increment = ramda_1.add(1);
var FontRoboto = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    font-family: 'Roboto', sans-serif;\n"], ["\n    font-family: 'Roboto', sans-serif;\n"])));
exports.default = (function (props) {
    var _a = React.useState(props.value || 0), value = _a[0], setValue = _a[1];
    return React.createElement("div", { onClick: function () { return setValue(increment(value)); } },
        React.createElement(FontRoboto, null, value));
});
var templateObject_1;
//# sourceMappingURL=Counter.js.map