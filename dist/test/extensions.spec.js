"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("../src/index.js");
const cases = [
    [
        'Whats.Eating.Gilbert.Grape.1993.720p.BluRay.x264-SiNNERS.mkv',
        'Whats.Eating.Gilbert.Grape.1993.720p.BluRay.x264-SiNNERS',
    ],
    ['melite-spr-720p-rpk.mkv', 'melite-spr-720p-rpk'],
];
for (const [title, result] of cases) {
    (0, vitest_1.it)(`remove extension of "${title}"`, () => {
        (0, vitest_1.expect)((0, index_js_1.removeFileExtension)(title)).toBe(result);
    });
}
