"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require("faker");
var uniqFakers = {};
exports.getUniqFaker = function (instanceName, apiMethod, apiInstance) {
    if (apiMethod === void 0) { apiMethod = 'name'; }
    if (apiInstance === void 0) { apiInstance = 'firstName'; }
    if (uniqFakers[instanceName])
        return uniqFakers[instanceName];
    var NewFaker = function () {
        var resultCache = [];
        return function () {
            var result = faker[apiMethod][apiInstance]();
            result = resultCache.indexOf(result) === -1 ? result : result + 1;
            resultCache.push(result);
            return result;
        };
    };
    uniqFakers[instanceName] = NewFaker();
    return NewFaker();
};
exports.default = exports.getUniqFaker;
//# sourceMappingURL=uniqueFaker.js.map