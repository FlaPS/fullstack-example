"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = require("express");
var UsersRepository_1 = require("./UsersRepository");
exports.default = express_1.Router()
    .get('/user/:id', function (req, res, next) { return tslib_1.__awaiter(_this, void 0, void 0, function () { var _a, _b; return tslib_1.__generator(this, function (_c) {
    switch (_c.label) {
        case 0:
            _b = (_a = res).json;
            return [4 /*yield*/, UsersRepository_1.default.getProfileById(req.params.id)];
        case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
    }
}); }); })
    .patch('/user/:id', function (req, res, next) { return tslib_1.__awaiter(_this, void 0, void 0, function () { var _a, _b; return tslib_1.__generator(this, function (_c) {
    switch (_c.label) {
        case 0:
            _b = (_a = res).json;
            return [4 /*yield*/, UsersRepository_1.default.updateProfile(req.body)];
        case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
    }
}); }); })
    .get('/users', function (req, res, next) { return tslib_1.__awaiter(_this, void 0, void 0, function () { var _a, _b; return tslib_1.__generator(this, function (_c) {
    switch (_c.label) {
        case 0:
            _b = (_a = res).json;
            return [4 /*yield*/, UsersRepository_1.default.getAllUsers()];
        case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
    }
}); }); })
    .get('/users/count', function (req, res, next) { return tslib_1.__awaiter(_this, void 0, void 0, function () { var _a, _b; return tslib_1.__generator(this, function (_c) {
    switch (_c.label) {
        case 0:
            _b = (_a = res).json;
            return [4 /*yield*/, UsersRepository_1.default.getTotalUsers()];
        case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
    }
}); }); });
//# sourceMappingURL=router.js.map