"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tryTo(func) {
    return { otherwise: function (value) {
            try {
                return func();
            }
            catch (e) {
                console.error(e);
            }
            return value;
        },
    };
}
exports.tryTo = tryTo;
//# sourceMappingURL=tryTo.js.map