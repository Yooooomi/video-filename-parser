"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isComplete = exports.isCompleteDvd = void 0;
const completeDvdExp = /\b(NTSC|PAL)?.DVDR\b/i;
function isCompleteDvd(title) {
    return completeDvdExp.test(title) || undefined;
}
exports.isCompleteDvd = isCompleteDvd;
const completeExp = /\b(COMPLETE)\b/i;
function isComplete(title) {
    return completeExp.test(title) || isCompleteDvd(title) || undefined;
}
exports.isComplete = isComplete;
