"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("@storybook/react");
var Counter_1 = require("./Counter");
react_2.storiesOf('Test', module)
    .add('Counter', function () { return react_1.default.createElement(Counter_1.default, { value: 10 }); });
//# sourceMappingURL=Counter.story.js.map