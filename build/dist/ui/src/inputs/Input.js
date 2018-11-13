"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/*
const StyledInput = styled.input`
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.25);
    height: 30px;
`
*/
exports.default = (function (_a) {
    var value = _a.value, onChange = _a.onChange;
    return React.createElement("input", { value: value, onChange: function (e) {
            return onChange && onChange(e.target.value, e);
        } });
});
//# sourceMappingURL=Input.js.map