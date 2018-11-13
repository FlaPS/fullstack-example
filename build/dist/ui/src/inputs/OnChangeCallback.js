"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (onChangeCallback) {
    return function (e) {
        return onChangeCallback && onChangeCallback(e.target['value'], e);
    };
});
//# sourceMappingURL=OnChangeCallback.js.map