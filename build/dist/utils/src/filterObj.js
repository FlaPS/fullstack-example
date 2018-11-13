"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.default = (function (pred) {
    return function (array) {
        return Object
            .keys(array)
            .reduce(function (r, key) {
            var _a;
            var test = pred(array[key]);
            return test
                ? tslib_1.__assign({}, r, (_a = {}, _a[key] = array[key], _a)) : r;
        }, {});
    };
});
//# sourceMappingURL=filterObj.js.map