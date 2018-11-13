"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var styled_components_1 = require("styled-components");
var fonts_1 = require("../styles/fonts");
var PrimaryButton_1 = require("../components/PrimaryButton");
// import {usePrevious} from '@local/react-fp'
var Input_1 = require("./Input");
var FieldDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  > *{\n    margin-right: 10px;\n  }\n\n"], ["\n  display: flex;\n  align-items: center;\n  > *{\n    margin-right: 10px;\n  }\n\n"])));
exports.default = (function (_a) {
    var label = _a.label, onChange = _a.onChange, value = _a.value;
    var _b = React.useState(value), stateValue = _b[0], setValue = _b[1];
    var _c = React.useState(false), editMode = _c[0], setEditMode = _c[1];
    var ref = React.useRef(value);
    React.useEffect(function () {
        ref.current = value || '';
    });
    var prevValue = ref.current;
    if (prevValue !== value)
        setValue(value);
    var onSubmit = function () {
        if (onChange)
            onChange(stateValue || '');
        setEditMode(false);
    };
    var swithToEdit = function () {
        setEditMode(true);
    };
    return editMode
        ? React.createElement(FieldDiv, null, React.createElement(fonts_1.Regular, null, label, ":"), React.createElement(Input_1.default, { value: stateValue, onChange: function (value) { return setValue(value); } }), React.createElement(PrimaryButton_1.default, { onClick: onSubmit }, "Submit"))
        : React.createElement(fonts_1.RegularEditable, { onClick: swithToEdit }, stateValue);
});
var templateObject_1;
//# sourceMappingURL=InputField.js.map
//# sourceMappingURL=InputField.js.map