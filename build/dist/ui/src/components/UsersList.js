"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var styled_components_1 = require("styled-components");
var ramda_1 = require("ramda");
var UserCard_1 = require("./UserCard");
var Layout = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    > * {\n      flex: 1 0 21%;\n      margin: 10px;\n    }\n"], ["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    > * {\n      flex: 1 0 21%;\n      margin: 10px;\n    }\n"])));
var renderCards = ramda_1.map(/*addKey(UserCard, 'id')*/ function (obj) {
    return React.createElement(UserCard_1.default, tslib_1.__assign({}, obj, { key: obj.id }));
});
exports.default = (function (users) {
    if (users === void 0) { users = []; }
    return React.createElement(Layout, null, renderCards(users));
});
var templateObject_1;
//# sourceMappingURL=UsersList.js.map