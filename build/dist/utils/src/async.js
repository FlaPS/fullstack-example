"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.sleep = function (time) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) {
                return setTimeout(resolve, time);
            })];
    });
}); };
//# sourceMappingURL=async.js.map