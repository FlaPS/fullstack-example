"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = require("styled-components");
var Avatar_1 = require("./Avatar");
var fonts_1 = require("../styles/fonts");
var React = require("react");
var Layout = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  > *:first-child{\n    margin-bottom: 10px;\n  }\n  > *:not(:first-child){\n    margin-top: 10px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  > *:first-child{\n    margin-bottom: 10px;\n  }\n  > *:not(:first-child){\n    margin-top: 10px;\n  }\n"])));
exports.default = (function (_a) {
    var name = _a.name, age = _a.age, url = _a.url;
    return React.createElement(Layout, null, React.createElement(Avatar_1.default, { url: url }), React.createElement(fonts_1.Title, null, name), age && React.createElement(fonts_1.Caption, null, age, " years old"));
});
var templateObject_1;
//# sourceMappingURL=UserHeader.js.map
//# sourceMappingURL=UserHeader.js.map