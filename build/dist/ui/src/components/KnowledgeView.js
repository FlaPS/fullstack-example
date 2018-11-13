"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var styled_components_1 = require("styled-components");
var fonts_1 = require("../styles/fonts");
var Layout = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n"])));
var LanguagesList = styled_components_1.default(fonts_1.Regular)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n    maw-width: 500px;\n    margin-top: 10px;\n\n"], ["\n    maw-width: 500px;\n    margin-top: 10px;\n\n"])));
var FRAMEWORK_DELIMITER = ' - ';
exports.default = (function (_a) {
    var language = _a.language, _b = _a.frameworks, frameworks = _b === void 0 ? [] : _b;
    return React.createElement(Layout, null,
        React.createElement(fonts_1.Title, null, language),
        frameworks.length &&
            React.createElement(LanguagesList, null, frameworks.join(FRAMEWORK_DELIMITER)));
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=KnowledgeView.js.map