"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = require("styled-components");
var colors_1 = require("../styles/colors");
var metrics = function (prop, cssProp) { return function (props) {
    return props[prop] &&
        (cssProp || prop) + ': ' + (isNaN(props[prop])
            ? props[prop]
            : props[prop] + 'px') + ';';
}; };
var getMarginAuto = function (props) {
    return props.marginAuto
        ? 'margin: auto;'
        : '';
};
var widthMetric = function (props) {
    return props.stretch
        ? 'width: 100%;'
        : metrics('width')(props);
};
exports.VBox = styled_components_1.default('div')(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    box-sizing: border-box;\n    display:flex;\n    flex-direction: column;\n    border-bottom: ", ";\n    ", "\n    ", "\n    ", "\n    > div:not(:first-child){\n     ", ";\n    }\n    > button:not(:first-child){\n     ", ";\n    }\n"], ["\n    box-sizing: border-box;\n    display:flex;\n    flex-direction: column;\n    border-bottom: ", ";\n    ", "\n    ", "\n    ", "\n    > div:not(:first-child){\n     ", ";\n    }\n    > button:not(:first-child){\n     ", ";\n    }\n"])), function (props) { return props.bottomBorder ? "1px solid " + colors_1.default.LIGHT_BORDER_GRAY : 'none'; }, widthMetric, metrics('height'), getMarginAuto, metrics('gap', 'margin-top'), metrics('gap', 'margin-top'));
exports.HBox = styled_components_1.default('div')(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: ", ";\n    border-top: ", ";\n    border-bottom: ", ";\n    ", "\n    ", "\n    ", "\n    > div:not(:first-child){\n        ", "\n    }\n    > button:not(:first-child){\n        ", "\n    }\n"], ["\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: ", ";\n    border-top: ", ";\n    border-bottom: ", ";\n    ", "\n    ", "\n    ", "\n    > div:not(:first-child){\n        ", "\n    }\n    > button:not(:first-child){\n        ", "\n    }\n"])), function (props) { return props.reversed ? 'row-reverse' : 'row'; }, function (props) { return props.topBorder ? "1px solid " + colors_1.default.LIGHT_BORDER_GRAY : 'none'; }, function (props) { return props.bottomBorder ? "1px solid " + colors_1.default.LIGHT_BORDER_GRAY : 'none'; }, widthMetric, metrics('height'), getMarginAuto, metrics('gap', 'margin-left'), metrics('gap', 'margin-left'));
var templateObject_1, templateObject_2;
//# sourceMappingURL=Box.js.map