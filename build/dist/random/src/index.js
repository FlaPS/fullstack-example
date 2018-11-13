"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var generate_password_1 = require("generate-password");
var uuid = require("uuid/v4");
var fakerRaw = require("faker");
var utils = require("@sha/utils");
var ramda_1 = require("ramda");
fakerRaw['locale'] = 'ru';
exports.generatePassword = function (length, withNumbers) {
    if (length === void 0) { length = 10; }
    if (withNumbers === void 0) { withNumbers = true; }
    return generate_password_1.generate({
        length: length,
        numbers: withNumbers,
    });
};
exports.generateGuid = uuid;
exports.faker = fakerRaw;
var uniqufy = function (f) {
    var cache = {};
    var call = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = f.apply(void 0, args);
        if (cache[result] !== undefined) {
            cache[result] = cache[result] + 1;
            result += String(cache[result]);
        }
        else
            cache[result] = 0;
        return result;
    };
    return call;
};
var ap = function (f) { return uniqufy(f); };
var runAp = function (obj) {
    if (typeof obj === 'function')
        return ap(obj);
    else if (typeof obj === 'object') {
        return Object.keys(obj).reduce(function (result, k) {
            var _a;
            return (tslib_1.__assign({}, result, (_a = {}, _a[k] = runAp(obj[k]), _a)));
        }, {});
    }
    return obj;
};
var ramda_2 = require("ramda");
exports.uniqueFaker = function () {
    var source = ramda_2.omit(['locales'], fakerRaw);
    var result = runAp(source);
    return result;
};
function shuffleMutate(a) {
    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
exports.shuffle = function (a) {
    return shuffleMutate(a.slice());
};
exports.randomInt = function (max, min) {
    if (min === void 0) { min = 0; }
    var range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
};
var takeRandomArray = function (max, min, array) {
    if (max === void 0) { max = undefined; }
    if (min === void 0) { min = 0; }
    var source = exports.shuffle(array);
    max = typeof max === 'number' ? max : source.length - 1;
    var length = Math.max(exports.randomInt(max, min), source.length - 1);
    return source.slice(0, length);
};
var takeRandomFormObject = function (max, min, array) {
    if (max === void 0) { max = undefined; }
    if (min === void 0) { min = 0; }
    return ramda_1.pick(takeRandomArray(max, min, Object.keys(array)), array);
};
exports.takeRandom = function (max, min) {
    if (max === void 0) { max = undefined; }
    if (min === void 0) { min = 0; }
    return function (source) {
        // @ts-ignore
        return utils.isArray(source)
            ? takeRandomArray(max, min, source)
            : takeRandomFormObject(max, min, source);
    };
};
exports.randomElement = function (source) {
    var result = exports.takeRandom(1, 1)(source);
    // @ts-ignore
    return utils.isArray(source)
        ? result[0]
        : ramda_1.values(result)[0];
};
//# sourceMappingURL=index.js.map