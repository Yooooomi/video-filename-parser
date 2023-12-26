"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const audioCodec_js_1 = require("../src/audioCodec.js");
const audioCodecCases = [
    [
        'Hannibal 2001 4K UHD Dolby Vision MP4 DD+5 1 H265-d3g',
        { codec: audioCodec_js_1.AudioCodec.DOLBY, source: 'Dolby' },
    ],
    ['Aladdin 2019 720p BluRay x264 AC3 5 1-OMEGA', { codec: audioCodec_js_1.AudioCodec.DOLBY, source: 'AC3' }],
    ['Trespass Against Us (2017) 1080p BluRay x265 6ch -Dtech mkv', {}],
    [
        'Abbot and Costello Meet Frankenstein 1948 BluRay 1080p HEVC Dts Stereo-D3FiL3R',
        { codec: audioCodec_js_1.AudioCodec.DTS, source: 'Dts' },
    ],
    [
        'The.Daily.Show.2015.07.01.Kirsten.Gillibrand.Extended.720p.Comedy.Central.WEBRip.AAC2.0.x264-BTW.mkv',
        { codec: audioCodec_js_1.AudioCodec.AAC, source: 'AAC' },
    ],
    ['Girl on the Third Floor 2019 BRRip x264 AAC-SSN', { codec: audioCodec_js_1.AudioCodec.AAC, source: 'AAC' }],
    [
        'New Eden S01E01 Who Are These Women CRAV WEB-DL AAC2 0 H 264-BTW',
        { codec: audioCodec_js_1.AudioCodec.AAC, source: 'AAC' },
    ],
    [
        'South Park S20E08 Members Only Uncensored 1080p WEB-DL HEVC x265 AAC2ch-NEBO666',
        { codec: audioCodec_js_1.AudioCodec.AAC, source: 'AAC' },
    ],
    [
        'Behind the Candelabra 2013 BDRip 1080p DTS-HD extra-HighCode',
        { codec: audioCodec_js_1.AudioCodec.DTSHD, source: 'DTS-HD' },
    ],
    [
        'Ex Machina 2015 UHD BluRay 2160p DTS-X 7 1 HDR x265 10bit-CHD',
        { codec: audioCodec_js_1.AudioCodec.DTSHD, source: 'DTS-X' },
    ],
];
for (const [title, result] of audioCodecCases) {
    (0, vitest_1.it)(`parse audio codec from "${title}"`, () => {
        (0, vitest_1.expect)((0, audioCodec_js_1.parseAudioCodec)(title)).toEqual(result);
    });
}
