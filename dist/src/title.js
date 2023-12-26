"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTitleAndYear = void 0;
const audioChannels_js_1 = require("./audioChannels.js");
const audioCodec_js_1 = require("./audioCodec.js");
const resolution_js_1 = require("./resolution.js");
const simplifyTitle_js_1 = require("./simplifyTitle.js");
const videoCodec_js_1 = require("./videoCodec.js");
const movieTitleYearRegex = [
    // Special, Despecialized, etc. Edition Movies, e.g: Mission.Impossible.3.Special.Edition.2011
    /^(?<title>(?![([]).+?)?(?:(?:[-_\W](?<![)[!]))*\(?\b(?<edition>(((Extended.|Ultimate.)?(Director.?s|Collector.?s|Theatrical|Anniversary|The.Uncut|Ultimate|Final(?=(.(Cut|Edition|Version)))|Extended|Rogue|Special|Despecialized|\d{2,3}(th)?.Anniversary)(.(Cut|Edition|Version))?(.(Extended|Uncensored|Remastered|Unrated|Uncut|IMAX|Fan.?Edit))?|((Uncensored|Remastered|Unrated|Uncut|IMAX|Fan.?Edit|Edition|Restored|((2|3|4)in1))))))\b\)?.{1,3}(?<year>(1(8|9)|20)\d{2}(?!p|i|\d+|\]|\W\d+)))+(\W+|_|$)(?!\\)/i,
    // Folder movie format, e.g: Blade Runner 2049 (2017)
    /^(?<title>(?![([]).+?)?(?:(?:[-_\W](?<![)[!]))*\((?<year>(1(8|9)|20)\d{2}(?!p|i|(1(8|9)|20)\d{2}|\]|\W(1(8|9)|20)\d{2})))+/i,
    // Normal movie format, e.g: Mission.Impossible.3.2011
    /^(?<title>(?![([]).+?)?(?:(?:[-_\W](?<![)[!]))*(?<year>(1(8|9)|20)\d{2}(?!p|i|(1(8|9)|20)\d{2}|\]|\W(1(8|9)|20)\d{2})))+(\W+|_|$)(?!\\)/i,
    // PassThePopcorn Torrent names: Star.Wars[PassThePopcorn]
    /^(?<title>.+?)?(?:(?:[-_\W](?<![()[!]))*(?<year>(\[\w *\])))+(\W+|_|$)(?!\\)/i,
    // That did not work? Maybe some tool uses [] for years. Who would do that?
    /^(?<title>(?![([]).+?)?(?:(?:[-_\W](?<![)!]))*(?<year>(1(8|9)|20)\d{2}(?!p|i|\d+|\W\d+)))+(\W+|_|$)(?!\\)/i,
    // As a last resort for movies that have ( or [ in their title.
    /^(?<title>.+?)?(?:(?:[-_\W](?<![)[!]))*(?<year>(1(8|9)|20)\d{2}(?!p|i|\d+|\]|\W\d+)))+(\W+|_|$)(?!\\)/i,
];
function parseTitleAndYear(title) {
    const simpleTitle = (0, simplifyTitle_js_1.simplifyTitle)(title);
    // Removing the group from the end could be trouble if a title is "title-year"
    const grouplessTitle = simpleTitle.replace(/-([a-z0-9]+)$/i, '');
    for (const exp of movieTitleYearRegex) {
        const match = exp.exec(grouplessTitle);
        if (match?.groups) {
            const result = (0, simplifyTitle_js_1.releaseTitleCleaner)(match.groups['title'] ?? '');
            if (result === null) {
                continue;
            }
            const year = match.groups['year'] ?? null;
            return { title: result, year };
        }
    }
    // year not found, attack using codec or resolution
    // attempt to parse using the first found artifact like codec
    const resolutionText = (0, resolution_js_1.parseResolution)(title).source;
    const resolutionPosition = title.indexOf(resolutionText ?? '');
    const videoCodecTest = (0, videoCodec_js_1.parseVideoCodec)(title).source;
    const videoCodecPosition = title.indexOf(videoCodecTest ?? '');
    const channelsTest = (0, audioChannels_js_1.parseAudioChannels)(title).source;
    const channelsPosition = title.indexOf(channelsTest ?? '');
    const audioCodecTest = (0, audioCodec_js_1.parseAudioCodec)(title).source;
    const audioCodecPosition = title.indexOf(audioCodecTest ?? '');
    const positions = [
        resolutionPosition,
        audioCodecPosition,
        channelsPosition,
        videoCodecPosition,
    ].filter(x => x > 0);
    if (positions.length) {
        const firstPosition = Math.min(...positions);
        return { title: (0, simplifyTitle_js_1.releaseTitleCleaner)(title.slice(0, firstPosition)) ?? '', year: null };
    }
    return { title: title.trim(), year: null };
}
exports.parseTitleAndYear = parseTitleAndYear;
