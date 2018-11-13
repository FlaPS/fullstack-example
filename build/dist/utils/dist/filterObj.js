"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (pred) { return function (array) { return Object
    .keys(array)
    .reduce(function (r, key) {
    var _a;
    var test = pred(array[key]);
    return test
        ? Object.assign({}, r, (_a = {}, _a[key] = array[key], _a)) : r;
}, {}); }; };
//# sourceMappingURL=filterObj.js.map