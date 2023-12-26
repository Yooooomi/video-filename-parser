"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEmpty = void 0;
function removeEmpty(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== null));
}
exports.removeEmpty = removeEmpty;
