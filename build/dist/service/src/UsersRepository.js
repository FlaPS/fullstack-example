"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ramda_1 = require("ramda");
var config = require("../config.json");
var seed_1 = require("./seed");
var ramda_2 = require("ramda");
/**
 * Why async ?
 * Because the implementation could based on async IO (DB, file system, or what ever)
 * @param id
 */
var users = seed_1.default(config.numberOfUsersToSeed);
var getProfileById = function (id) { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2 /*return*/, users.find(ramda_1.whereEq({ id: String(id) }))];
}); }); };
var updateProfile = function (_a) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var user;
    var id = _a.id, rest = tslib_1.__rest(_a, ["id"]);
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, getProfileById(id)];
            case 1:
                user = _b.sent();
                Object.assign(user, rest);
                return [2 /*return*/, user];
        }
    });
}); };
var getTotalUsers = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2 /*return*/, users.length];
}); }); };
var getName = ramda_2.path(['language']);
var mapNames = ramda_2.map(getName);
var getAllUsers = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/, users.map(function (_a) {
                var _b = _a.knowledge, knowledge = _b === void 0 ? [] : _b, user = tslib_1.__rest(_a, ["knowledge"]);
                return (tslib_1.__assign({}, user, { languages: mapNames(knowledge) }));
            })];
    });
}); };
exports.default = {
    getProfileById: getProfileById,
    getTotalUsers: getTotalUsers,
    updateProfile: updateProfile,
    getAllUsers: getAllUsers,
};
//# sourceMappingURL=UsersRepository.js.map