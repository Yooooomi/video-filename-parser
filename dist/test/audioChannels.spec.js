"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const audioChannels_js_1 = require("../src/audioChannels.js");
const audioChannelCases = [
    [
        'Hannibal 2001 4K UHD Dolby Vision MP4 DD+5 1 H265-d3g',
        { channels: audioChannels_js_1.Channels.SIX, source: '5 1' },
    ],
    ['Aladdin 2019 720p BluRay x264 AC3 5 1-OMEGA', { channels: audioChannels_js_1.Channels.SIX, source: '5 1' }],
    [
        'Trespass Against Us (2017) 1080p BluRay x265 6ch -Dtech mkv',
        { channels: audioChannels_js_1.Channels.SIX, source: '6ch' },
    ],
    [
        'Abbot and Costello Meet Frankenstein 1948 BluRay 1080p HEVC Dts Stereo-D3FiL3R',
        { channels: audioChannels_js_1.Channels.STEREO, source: 'Stereo' },
    ],
    [
        'The.Daily.Show.2015.07.01.Kirsten.Gillibrand.Extended.720p.Comedy.Central.WEBRip.AAC2.0.x264-BTW.mkv',
        { channels: audioChannels_js_1.Channels.STEREO, source: '2.0' },
    ],
];
for (const [title, result] of audioChannelCases) {
    (0, vitest_1.it)(`parse audio channel "${title}"`, () => {
        (0, vitest_1.expect)((0, audioChannels_js_1.parseAudioChannels)(title)).toEqual(result);
    });
}
