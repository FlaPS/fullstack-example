"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_2 = require("@storybook/react");
var styled_components_1 = require("styled-components");
var fonts = require("./fonts");
var ramda_1 = require("ramda");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    background-color: #eee;\n    max-width: 500px;\n    margin: auto;\n    padding: 10px 50px;\n"], ["\n    background-color: #eee;\n    max-width: 500px;\n    margin: auto;\n    padding: 10px 50px;\n"])));
var renderExample = ramda_1.map(function (key) {
    return react_1.default.createElement("div", null, react_1.default.createElement(fonts[key], {}, key));
});
var renderFonts = ramda_1.compose(renderExample, ramda_1.keys);
react_2.storiesOf('styles', module)
    .add('fonts', function () {
    return react_1.default.createElement(Wrapper, null, renderFonts(fonts));
});
var templateObject_1;
//# sourceMappingURL=fonts.story.js.map