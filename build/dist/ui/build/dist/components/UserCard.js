"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Paper_1 = require("../layout/Paper");
var fonts_1 = require("../styles/fonts");
var styled_components_1 = require("styled-components");
var UserHeader_1 = require("./UserHeader");
var CardLayout = styled_components_1.default(Paper_1.default)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  width: 220px;\n  height: 292px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 40px;\n  box-sizing: border-box;\n  > *:first-child{\n    margin-bottom: 10px;\n  }\n  > *:not(:first-child){\n    margin-top: 10px;\n  }\n  &:hover{\n      box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.3);\n  }\n\n\n  > *:last-child{\n    flex-shrink: 0;\n    max-height: 46px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n\n    position: relative;\n    &:after{\n        content: \" \";\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        text-align: center;\n        margin: 0;\n        padding: 8px 0;\n        background-image: linear-gradient(to bottom,transparent,white);\n    }\n  }\n"], ["\n  width: 220px;\n  height: 292px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 40px;\n  box-sizing: border-box;\n  > *:first-child{\n    margin-bottom: 10px;\n  }\n  > *:not(:first-child){\n    margin-top: 10px;\n  }\n  &:hover{\n      box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.3);\n  }\n\n\n  > *:last-child{\n    flex-shrink: 0;\n    max-height: 46px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n\n    position: relative;\n    &:after{\n        content: \" \";\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        text-align: center;\n        margin: 0;\n        padding: 8px 0;\n        background-image: linear-gradient(to bottom,transparent,white);\n    }\n  }\n"])));
var Languages = styled_components_1.default(fonts_1.Regular)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  padding-left: 36px;\n  padding-right: 36px;\n  text-align: center;\n\n"], ["\n  padding-left: 36px;\n  padding-right: 36px;\n  text-align: center;\n\n"])));
var UserCard = function (_a) {
    var url = _a.url, age = _a.age, name = _a.name, _b = _a.languages, languages = _b === void 0 ? [] : _b;
    return React.createElement(CardLayout, null, React.createElement(UserHeader_1.default, { url: url, age: age, name: name }), languages.length &&
        React.createElement(Languages, null, languages.join(', ')));
};
exports.default = UserCard;
var templateObject_1, templateObject_2;
//# sourceMappingURL=UserCard.js.map
//# sourceMappingURL=UserCard.js.map