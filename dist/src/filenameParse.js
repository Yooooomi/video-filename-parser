"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filenameParse = void 0;
const audioChannels_js_1 = require("./audioChannels.js");
const audioCodec_js_1 = require("./audioCodec.js");
const complete_js_1 = require("./complete.js");
const edition_js_1 = require("./edition.js");
const group_js_1 = require("./group.js");
const language_js_1 = require("./language.js");
const quality_js_1 = require("./quality.js");
const season_js_1 = require("./season.js");
const title_js_1 = require("./title.js");
const utils_js_1 = require("./utils.js");
const videoCodec_js_1 = require("./videoCodec.js");
/**
 * @param name release / file name
 * @param isTV
 */
function filenameParse(name, isTv = false) {
    let title = '';
    let year = null;
    if (!isTv) {
        const titleAndYear = (0, title_js_1.parseTitleAndYear)(name);
        title = titleAndYear.title;
        year = titleAndYear.year;
    }
    const edition = (0, edition_js_1.parseEdition)(name);
    const { codec: videoCodec } = (0, videoCodec_js_1.parseVideoCodec)(name);
    const { codec: audioCodec } = (0, audioCodec_js_1.parseAudioCodec)(name);
    const { channels: audioChannels } = (0, audioChannels_js_1.parseAudioChannels)(name);
    const group = (0, group_js_1.parseGroup)(name);
    const languages = (0, language_js_1.parseLanguage)(name);
    const quality = (0, quality_js_1.parseQuality)(name);
    const multi = (0, language_js_1.isMulti)(name);
    const complete = (0, complete_js_1.isComplete)(name);
    const result = {
        title,
        year,
        resolution: quality.resolution,
        sources: quality.sources,
        videoCodec,
        audioCodec,
        audioChannels,
        revision: quality.revision,
        group,
        edition,
        languages,
        multi,
        complete,
    };
    if (isTv) {
        const season = (0, season_js_1.parseSeason)(name);
        if (season !== null) {
            const seasonResult = {
                seasons: season.seasons,
                episodeNumbers: season.episodeNumbers,
                airDate: season.airDate,
                fullSeason: season.fullSeason,
                isPartialSeason: season.isPartialSeason,
                isMultiSeason: season.isMultiSeason,
                isSeasonExtra: season.isSeasonExtra,
                isSpecial: season.isSpecial,
                seasonPart: season.seasonPart,
            };
            return {
                ...result,
                title: season.seriesTitle ?? title,
                ...seasonResult,
                isTv: true,
            };
        }
    }
    return (0, utils_js_1.removeEmpty)(result);
}
exports.filenameParse = filenameParse;
