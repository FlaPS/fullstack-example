"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var styled_components_1 = require("styled-components");
var UserHeader_1 = require("./UserHeader");
var InputField_1 = require("../inputs/InputField");
var KnowledgeView_1 = require("./KnowledgeView");
var Layout = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 80px;\n\n  > *:first-child{\n    margin-bottom: 10px;\n  }\n  > *:not(:first-child){\n    margin-top: 20px;\n  }\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 80px;\n\n  > *:first-child{\n    margin-bottom: 10px;\n  }\n  > *:not(:first-child){\n    margin-top: 20px;\n  }\n"])));
var Divider = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  max-width: 500px;\n  width: 100%;\n  height: 1px;\n  margin-left: 20px;\n  margin-right: 20px;\n  background-color: #D5D5D5;\n"], ["\n  max-width: 500px;\n  width: 100%;\n  height: 1px;\n  margin-left: 20px;\n  margin-right: 20px;\n  background-color: #D5D5D5;\n"])));
exports.default = (function (_a) {
    var profile = _a.profile, onChange = _a.onChange;
    return React.createElement(Layout, null, React.createElement(UserHeader_1.default, { url: profile.url, age: profile.age, name: profile.name }), React.createElement(InputField_1.default, { label: 'Country', value: profile.city, onChange: function (city) { return onChange && onChange(Object.assign({}, profile, { city: city })); } }), React.createElement(Divider, null), profile.knowledge &&
        profile.knowledge.map(KnowledgeView_1.default));
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=ProfileView.js.map
//# sourceMappingURL=ProfileView.js.map