"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const complete_js_1 = require("../src/complete.js");
const cases = [
    ['Cars.2.DVDR-TGP', true],
    ['Cars.2.2011.EN.SE.FI.PAL.DVDR-AMIRITE', true],
    ['The.Outsiders.1983.DUAL.COMPLETE.BLURAY-THEORY', true],
];
for (const [title, result] of cases) {
    (0, vitest_1.it)(`get isComplete from "${title}"`, () => {
        (0, vitest_1.expect)((0, complete_js_1.isComplete)(title)).toBe(result);
    });
}
