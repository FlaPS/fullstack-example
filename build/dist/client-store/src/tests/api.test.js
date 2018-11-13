"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var api_1 = require("../api");
var index_1 = require("../../../service/src/index");
var api = api_1.default();
var app;
beforeAll(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, index_1.default];
        case 1: return [2 /*return*/, app = _a.sent()];
    }
}); }); });
afterAll(function (done) {
    return app.close(done);
});
test('get users list', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var result;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api.getAllUsers()];
            case 1:
                result = _a.sent();
                expect(result.result).toBeDefined();
                return [2 /*return*/];
        }
    });
}); });
test('Update user city, and check one', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var city, id, selectedUser;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                city = String(Math.random());
                id = '2';
                return [4 /*yield*/, api.patchProfile({ id: id, city: city })];
            case 1:
                _a.sent();
                return [4 /*yield*/, api.getProfile({ id: id })];
            case 2:
                selectedUser = _a.sent();
                expect(selectedUser.result.city).toEqual(city);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=api.test.js.map