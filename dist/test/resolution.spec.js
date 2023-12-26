"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("../src/index.js");
const cases = [
    ['Oceans.Thirteen.2007.iNTERNAL.720p.BluRay.x264-MHQ', index_js_1.Resolution.R720P],
    ['Rocketman 2019 2160p UHD BluRay x265-TERMiNAL', index_js_1.Resolution.R2160P],
    ['Alita Battle Angel 2019 1080p BluRay x264-SPARKS', index_js_1.Resolution.R1080P],
    ['Alita Battle Angel 2019 HDRip AC3 x264-CMRG', undefined],
    ['Alita Battle Angel 2019 2160p WEB-DL DD+5 1 HEVC-DEFLATE[NO RAR]', index_js_1.Resolution.R2160P],
    ['Alita: Battle Angel 2019 BRRip AC3 x264-CMRG', undefined],
    ['Revolution.S01E02.Chained.Heat.[Bluray720p].mkv', index_js_1.Resolution.R720P],
    ['WEEDS.S03E01-06.DUAL.720p.Blu-ray.AC3.-HELLYWOOD.avi', index_js_1.Resolution.R720P],
    ['Revolution.S01E02.Chained.Heat.[Bluray1080p].mkv', index_js_1.Resolution.R1080P],
    ['27.Dresses.2008.REMUX.2160p.Bluray.AVC.DTS-HR.MA.5.1-LEGi0N', index_js_1.Resolution.R2160P],
    ['Deadpool 2016 2160p 4K UltraHD BluRay DTS-HD MA 7 1 x264-Whatevs', index_js_1.Resolution.R2160P],
    ['Deadpool 2016 4K 2160p UltraHD BluRay AAC2 0 HEVC x265', index_js_1.Resolution.R2160P],
    ['The Martian 2015 2160p Ultra HD BluRay DTS-HD MA 7 1 x264-Whatevs', index_js_1.Resolution.R2160P],
    ['The Revenant 2015 2160p UHD BluRay FLAC 7 1 x264-Whatevs', index_js_1.Resolution.R2160P],
    ['Into the Inferno 2016 2160p Netflix WEBRip DD5 1 x264-Whatevs', index_js_1.Resolution.R2160P],
    ['Indiana.Jones.and.the.Temple.of.Doom.1984.Complete.UHD.Bluray-JONES', index_js_1.Resolution.R2160P],
    ['Orphan Black S05E09 WEBRip 1080p10bit DD5 1 x265 HEVC D0ct0rLew', index_js_1.Resolution.R1080P],
    ['[SubsPlease] Movie Title (540p) [AB649D32]', index_js_1.Resolution.R540P],
    ['Series.Title.S04E13.960p.WEB-DL.AAC2.0.H.264-squalor', index_js_1.Resolution.R720P],
];
for (const [title, result] of cases) {
    (0, vitest_1.it)(`parse resolution "${title}"`, () => {
        (0, vitest_1.expect)((0, index_js_1.parseResolution)(title).resolution).toBe(result);
    });
}
const assumeCases = [
    ['127.Hours.DVDSCR.NTSC.DVDR-GALAXY', index_js_1.Resolution.R480P],
    ['127.Hours.GERMAN.2010.DL.PAL.DVDR-OldsMan', index_js_1.Resolution.R480P],
    ['12.Angry.Men.1957.DvDivX-SMB', index_js_1.Resolution.R480P],
];
for (const [title, result] of assumeCases) {
    (0, vitest_1.it)(`assumes resolution from source "${title}"`, () => {
        (0, vitest_1.expect)((0, index_js_1.parseResolution)(title).resolution).toBe(result);
    });
}
