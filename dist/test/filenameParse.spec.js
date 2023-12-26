"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const audioCodec_js_1 = require("../src/audioCodec.js");
const index_js_1 = require("../src/index.js");
const movieCases = [
    [
        'Whats.Eating.Gilbert.Grape.1993.720p.BluRay.x264-SiNNERS',
        {
            resolution: index_js_1.Resolution.R720P,
            sources: [index_js_1.Source.BLURAY],
            title: 'Whats Eating Gilbert Grape',
            year: '1993',
            videoCodec: index_js_1.VideoCodec.X264,
            group: 'SiNNERS',
            revision: { version: 1, real: 0 },
            languages: [index_js_1.Language.English],
        },
    ],
    [
        'Timecop.1994.PROPER.1080p.BluRay.x264-Japhson',
        {
            resolution: index_js_1.Resolution.R1080P,
            sources: [index_js_1.Source.BLURAY],
            title: 'Timecop',
            year: '1994',
            videoCodec: index_js_1.VideoCodec.X264,
            group: 'Japhson',
            revision: { version: 2, real: 0 },
            languages: [index_js_1.Language.English],
        },
    ],
    [
        'This.is.40.2012.PROPER.UNRATED.720p.BluRay.MULti.x264-Felony',
        {
            edition: { unrated: true },
            resolution: index_js_1.Resolution.R720P,
            sources: [index_js_1.Source.BLURAY],
            title: 'This is 40',
            year: '2012',
            videoCodec: index_js_1.VideoCodec.X264,
            group: 'Felony',
            revision: { version: 2, real: 0 },
            languages: [index_js_1.Language.English],
            multi: true,
        },
    ],
    [
        'Spider-Man Far from Home.2019.1080p.HDRip.X264.AC3-EVO',
        {
            resolution: index_js_1.Resolution.R1080P,
            sources: [index_js_1.Source.WEBDL],
            title: 'Spider-Man Far from Home',
            year: '2019',
            videoCodec: index_js_1.VideoCodec.X264,
            audioCodec: audioCodec_js_1.AudioCodec.DOLBY,
            group: 'EVO',
            revision: { version: 1, real: 0 },
            languages: [index_js_1.Language.English],
        },
    ],
    [
        'Togo 2019 2160p HDR DSNP WEBRip DDPAtmos 5 1 X265-TrollUHD',
        {
            resolution: index_js_1.Resolution.R2160P,
            sources: [index_js_1.Source.WEBRIP],
            title: 'Togo',
            year: '2019',
            group: 'TrollUHD',
        },
    ],
    [
        'Ex Machina 2015 UHD BluRay 2160p DTS-X 7 1 HDR x265 10bit-CHD',
        {
            title: 'Ex Machina',
            year: '2015',
            group: 'CHD',
            resolution: index_js_1.Resolution.R2160P,
        },
    ],
    [
        'Apprentice.2016.COMPLETE.BLURAY-UNRELiABLE',
        {
            title: 'Apprentice',
            year: '2016',
            group: 'UNRELiABLE',
            resolution: index_js_1.Resolution.R1080P,
            complete: true,
        },
    ],
    [
        'Indiana.Jones.and.the.Temple.of.Doom.1984.Complete.UHD.Bluray-JONES',
        {
            title: 'Indiana Jones and the Temple of Doom',
            year: '1984',
            group: 'JONES',
            resolution: index_js_1.Resolution.R2160P,
            complete: true,
        },
    ],
];
for (const [title, result] of movieCases) {
    (0, vitest_1.it)(`parse movie title "${title}"`, () => {
        (0, vitest_1.expect)((0, index_js_1.filenameParse)(title)).toEqual(vitest_1.expect.objectContaining(result));
    });
}
const tvCases = [
    [
        'Its Always Sunny in Philadelphia S14E04 720p WEB H264-METCON',
        {
            resolution: index_js_1.Resolution.R720P,
            sources: [index_js_1.Source.WEBDL],
            title: 'Its Always Sunny in Philadelphia',
            videoCodec: index_js_1.VideoCodec.H264,
            group: 'METCON',
            revision: { version: 1, real: 0 },
            languages: [index_js_1.Language.English],
            seasons: [14],
            episodeNumbers: [4],
            isTv: true,
        },
    ],
];
for (const [title, result] of tvCases) {
    (0, vitest_1.it)(`parse tv show title "${title}"`, () => {
        (0, vitest_1.expect)((0, index_js_1.filenameParse)(title, true)).toEqual(vitest_1.expect.objectContaining(result));
    });
}
const dailyTvCases = [
    [
        'NFL 2019 10 06 Chicago Bears vs Oakland Raiders Highlights 720p HEVC x265-MeGusta',
        {
            resolution: index_js_1.Resolution.R720P,
            sources: [index_js_1.Source.WEBDL],
            title: 'NFL',
            videoCodec: index_js_1.VideoCodec.X265,
            group: 'MeGusta',
            revision: { version: 1, real: 0 },
            languages: [index_js_1.Language.English],
            airDate: new Date(2019, 9, 6),
            isTv: true,
        },
    ],
];
for (const [title, result] of dailyTvCases) {
    (0, vitest_1.it)(`parse daily tv show title "${title}"`, () => {
        (0, vitest_1.expect)((0, index_js_1.filenameParse)(title, true)).toEqual(vitest_1.expect.objectContaining(result));
    });
}
