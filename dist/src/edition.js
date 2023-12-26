"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEdition = void 0;
const title_js_1 = require("./title.js");
const utils_js_1 = require("./utils.js");
const internalExp = /\b(INTERNAL)\b/i;
const remasteredExp = /\b(Remastered|Anniversary|Restored)\b/i;
const imaxExp = /\b(IMAX)\b/i;
const unratedExp = /\b(Uncensored|Unrated)\b/i;
const extendedExp = /\b(Extended|Uncut|Ultimate|Rogue|Collector)\b/i;
const theatricalExp = /\b(Theatrical)\b/i;
const directorsExp = /\b(Directors?)\b/i;
const fanExp = /\b(Despecialized|Fan.?Edit)\b/i;
const limitedExp = /\b(LIMITED)\b/i;
const hdrExp = /\b(HDR)\b/i;
const threeD = /\b(3D)\b/i;
const hsbs = /\b(Half-?SBS|HSBS)\b/i;
const sbs = /\b((?<!H|HALF-)SBS)\b/i;
const hou = /\b(HOU)\b/i;
const uhd = /\b(UHD)\b/i;
const oar = /\b(OAR)\b/i;
const dolbyVision = /\b(DV(\b(HDR10|HLG|SDR))?)\b/i;
const hardcodedSubsExp = /\b((?<hcsub>(\w+(?<!SOFT|HORRIBLE)SUBS?))|(?<hc>(HC|SUBBED)))\b/i;
const deletedScenes = /\b((Bonus.)?Deleted.Scenes)\b/i;
const bonusContent = /\b((Bonus|Extras|Behind.the.Scenes|Making.of|Interviews|Featurettes|Outtakes|Bloopers|Gag.Reel).(?!(Deleted.Scenes)))\b/i;
const bw = /\b(BW)\b/i;
function parseEdition(title) {
    const parsedTitle = (0, title_js_1.parseTitleAndYear)(title).title;
    const withoutTitle = title.replace('.', ' ').replace(parsedTitle, '').toLowerCase();
    const result = {
        internal: internalExp.test(withoutTitle) || undefined,
        limited: limitedExp.test(withoutTitle) || undefined,
        remastered: remasteredExp.test(withoutTitle) || undefined,
        extended: extendedExp.test(withoutTitle) || undefined,
        theatrical: theatricalExp.test(withoutTitle) || undefined,
        directors: directorsExp.test(withoutTitle) || undefined,
        unrated: unratedExp.test(withoutTitle) || undefined,
        imax: imaxExp.test(withoutTitle) || undefined,
        fanEdit: fanExp.test(withoutTitle) || undefined,
        hdr: hdrExp.test(withoutTitle) || undefined,
        threeD: threeD.test(withoutTitle) || undefined,
        hsbs: hsbs.test(withoutTitle) || undefined,
        sbs: sbs.test(withoutTitle) || undefined,
        hou: hou.test(withoutTitle) || undefined,
        uhd: uhd.test(withoutTitle) || undefined,
        oar: oar.test(withoutTitle) || undefined,
        dolbyVision: dolbyVision.test(withoutTitle) || undefined,
        hardcodedSubs: hardcodedSubsExp.test(withoutTitle) || undefined,
        deletedScenes: deletedScenes.test(withoutTitle) || undefined,
        bonusContent: bonusContent.test(withoutTitle) || undefined,
        bw: bw.test(withoutTitle) || undefined,
    };
    return (0, utils_js_1.removeEmpty)(result);
}
exports.parseEdition = parseEdition;
