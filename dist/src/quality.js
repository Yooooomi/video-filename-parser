"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseQuality = exports.parseQualityModifyers = exports.QualityModifier = void 0;
const resolution_js_1 = require("./resolution.js");
const source_js_1 = require("./source.js");
const videoCodec_js_1 = require("./videoCodec.js");
const properRegex = /\b(?<proper>proper|repack|rerip)\b/i;
const realRegex = /\b(?<real>REAL)\b/; // not insensitive
const versionExp = /(?<version>v\d\b|\[v\d\])/i;
const remuxExp = /\b(?<remux>(BD|UHD)?Remux)\b/i;
const bdiskExp = /\b(COMPLETE|ISO|BDISO|BDMux|BD25|BD50|BR.?DISK)\b/i;
const rawHdExp = /\b(?<rawhd>RawHD|1080i[-_. ]HDTV|Raw[-_. ]HD|MPEG[-_. ]?2)\b/i;
const highDefPdtvRegex = /hr[-_. ]ws/i;
var QualityModifier;
(function (QualityModifier) {
    QualityModifier["REMUX"] = "REMUX";
    QualityModifier["BRDISK"] = "BRDISK";
    QualityModifier["RAWHD"] = "RAWHD";
})(QualityModifier || (exports.QualityModifier = QualityModifier = {}));
function parseQualityModifyers(title) {
    const normalizedTitle = title.trim().replace(/_/g, ' ').trim().toLowerCase();
    const result = {
        version: 1,
        real: 0,
    };
    if (properRegex.test(normalizedTitle)) {
        result.version = 2;
    }
    const versionResult = versionExp.exec(normalizedTitle);
    if (versionResult?.groups) {
        // get numbers from version regex
        const digits = /\d/i.exec(versionResult.groups['version'] ?? '');
        if (digits) {
            const value = parseInt(digits[0] ?? '', 10);
            if (!Number.isNaN(value)) {
                result.version = value;
            }
        }
    }
    let realCount = 0;
    const realGlobalExp = RegExp(realRegex.source, 'g');
    // use non normalized title to prevent insensitive REAL matching
    while (realGlobalExp.exec(title)) {
        realCount += 1;
    }
    result.real = realCount;
    return result;
}
exports.parseQualityModifyers = parseQualityModifyers;
function parseQuality(title) {
    const normalizedTitle = title
        .trim()
        .replace(/_/g, ' ')
        .replace(/\[/g, ' ')
        .replace(/\]/g, ' ')
        .trim()
        .toLowerCase();
    const revision = parseQualityModifyers(title);
    const { resolution } = (0, resolution_js_1.parseResolution)(normalizedTitle);
    const sourceGroups = (0, source_js_1.parseSourceGroups)(normalizedTitle);
    const source = (0, source_js_1.parseSource)(normalizedTitle);
    const { codec } = (0, videoCodec_js_1.parseVideoCodec)(title);
    const result = {
        sources: source,
        resolution,
        revision,
        modifier: null,
    };
    if (bdiskExp.test(normalizedTitle) && sourceGroups.bluray) {
        result.modifier = QualityModifier.BRDISK;
        result.sources = [source_js_1.Source.BLURAY];
    }
    if (remuxExp.test(normalizedTitle) && !sourceGroups.webdl && !sourceGroups.hdtv) {
        result.modifier = QualityModifier.REMUX;
        result.sources = [source_js_1.Source.BLURAY];
    }
    if (rawHdExp.test(normalizedTitle) &&
        result.modifier !== QualityModifier.BRDISK &&
        result.modifier !== QualityModifier.REMUX) {
        result.modifier = QualityModifier.RAWHD;
        result.sources = [source_js_1.Source.TV];
    }
    if (source !== null) {
        if (sourceGroups.bluray) {
            result.sources = [source_js_1.Source.BLURAY];
            if (codec === videoCodec_js_1.VideoCodec.XVID) {
                result.resolution = resolution_js_1.Resolution.R480P;
                result.sources = [source_js_1.Source.DVD];
            }
            if (!resolution) {
                // assume bluray is at least 720p
                result.resolution = resolution_js_1.Resolution.R720P;
            }
            if (!resolution && result.modifier === QualityModifier.BRDISK) {
                result.resolution = resolution_js_1.Resolution.R1080P;
            }
            if (!resolution && result.modifier === QualityModifier.REMUX) {
                result.resolution = resolution_js_1.Resolution.R2160P;
            }
            return result;
        }
        if (sourceGroups.webdl || sourceGroups.webrip) {
            result.sources = source;
            if (!resolution) {
                result.resolution = resolution_js_1.Resolution.R480P;
            }
            if (!resolution) {
                result.resolution = resolution_js_1.Resolution.R480P;
            }
            if (!resolution && title.includes('[WEBDL]')) {
                result.resolution = resolution_js_1.Resolution.R720P;
            }
            return result;
        }
        if (sourceGroups.hdtv) {
            result.sources = [source_js_1.Source.TV];
            if (!resolution) {
                result.resolution = resolution_js_1.Resolution.R480P;
            }
            if (!resolution && title.includes('[HDTV]')) {
                result.resolution = resolution_js_1.Resolution.R720P;
            }
            return result;
        }
        if (sourceGroups.pdtv || sourceGroups.sdtv || sourceGroups.dsr || sourceGroups.tvrip) {
            result.sources = [source_js_1.Source.TV];
            if (highDefPdtvRegex.test(normalizedTitle)) {
                result.resolution = resolution_js_1.Resolution.R720P;
                return result;
            }
            result.resolution = resolution_js_1.Resolution.R480P;
            return result;
        }
        if (sourceGroups.bdrip || sourceGroups.brrip) {
            if (codec === videoCodec_js_1.VideoCodec.XVID) {
                result.resolution = resolution_js_1.Resolution.R480P;
                result.sources = [source_js_1.Source.DVD];
                return result;
            }
            if (!resolution) {
                // bdrips are at least 480p
                result.resolution = resolution_js_1.Resolution.R480P;
            }
            result.sources = [source_js_1.Source.BLURAY];
            return result;
        }
        if (sourceGroups.workprint) {
            result.sources = [source_js_1.Source.WORKPRINT];
            return result;
        }
        if (sourceGroups.cam) {
            result.sources = [source_js_1.Source.CAM];
            return result;
        }
        if (sourceGroups.ts) {
            result.sources = [source_js_1.Source.TELESYNC];
            return result;
        }
        if (sourceGroups.tc) {
            result.sources = [source_js_1.Source.TELECINE];
            return result;
        }
    }
    if (!result.modifier &&
        (resolution === resolution_js_1.Resolution.R2160P ||
            resolution === resolution_js_1.Resolution.R1080P ||
            resolution === resolution_js_1.Resolution.R720P)) {
        result.sources = [source_js_1.Source.WEBDL];
        return result;
    }
    return result;
}
exports.parseQuality = parseQuality;
