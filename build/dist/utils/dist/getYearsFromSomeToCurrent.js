"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYearsFromSomeToCurrent = function (from) {
    if (from === void 0) { from = 1950; }
    var currentYear = (new Date()).getFullYear();
    var years = [];
    for (var i = currentYear; i >= from; i--)
        // @ts-ignore
        years.push(i);
    return years;
};
//# sourceMappingURL=getYearsFromSomeToCurrent.js.map