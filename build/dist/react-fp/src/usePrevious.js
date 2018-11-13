"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function default_1(value) {
    var ref = react_1.useRef(null);
    react_1.useEffect(function () {
        ref.current = value;
    });
    return ref.current;
}
exports.default = default_1;
//# sourceMappingURL=usePrevious.js.map