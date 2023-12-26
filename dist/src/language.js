"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMulti = exports.parseLanguage = exports.Language = void 0;
const title_js_1 = require("./title.js");
var Language;
(function (Language) {
    Language["English"] = "English";
    Language["French"] = "French";
    Language["Spanish"] = "Spanish";
    Language["German"] = "German";
    Language["Italian"] = "Italian";
    Language["Danish"] = "Danish";
    Language["Dutch"] = "Dutch";
    Language["Japanese"] = "Japanese";
    Language["Cantonese"] = "Cantonese";
    Language["Mandarin"] = "Mandarin";
    Language["Russian"] = "Russian";
    Language["Polish"] = "Polish";
    Language["Vietnamese"] = "Vietnamese";
    Language["Nordic"] = "Nordic";
    Language["Swedish"] = "Swedish";
    Language["Norwegian"] = "Norwegian";
    Language["Finnish"] = "Finnish";
    Language["Turkish"] = "Turkish";
    Language["Portuguese"] = "Portuguese";
    Language["Flemish"] = "Flemish";
    Language["Greek"] = "Greek";
    Language["Korean"] = "Korean";
    Language["Hungarian"] = "Hungarian";
    Language["Persian"] = "Persian";
    Language["Bengali"] = "Bengali";
    Language["Bulgarian"] = "Bulgarian";
    Language["Brazilian"] = "Brazilian";
    Language["Hebrew"] = "Hebrew";
    Language["Czech"] = "Czech";
    Language["Ukrainian"] = "Ukrainian";
    Language["Catalan"] = "Catalan";
    Language["Chinese"] = "Chinese";
    Language["Thai"] = "Thai";
    Language["Hindi"] = "Hindi";
    Language["Tamil"] = "Tamil";
    Language["Arabic"] = "Arabic";
    Language["Estonian"] = "Estonian";
    Language["Icelandic"] = "Icelandic";
    Language["Latvian"] = "Latvian";
    Language["Lithuanian"] = "Lithuanian";
    Language["Romanian"] = "Romanian";
    Language["Slovak"] = "Slovak";
    Language["Serbian"] = "Serbian";
})(Language || (exports.Language = Language = {}));
function parseLanguage(title) {
    const parsedTitle = (0, title_js_1.parseTitleAndYear)(title).title;
    const languageTitle = title.replace(/\./g, ' ').replace(parsedTitle, '').toLowerCase();
    const languages = [];
    if (/\b(english|eng|EN|FI)\b/i.test(languageTitle)) {
        languages.push(Language.English);
    }
    if (languageTitle.includes('spanish')) {
        languages.push(Language.Spanish);
    }
    if (/\b(DK|DAN|danish)\b/i.test(languageTitle)) {
        languages.push(Language.Danish);
    }
    if (languageTitle.includes('japanese')) {
        languages.push(Language.Japanese);
    }
    if (languageTitle.includes('cantonese')) {
        languages.push(Language.Cantonese);
    }
    if (languageTitle.includes('mandarin')) {
        languages.push(Language.Mandarin);
    }
    if (languageTitle.includes('korean')) {
        languages.push(Language.Korean);
    }
    if (languageTitle.includes('vietnamese')) {
        languages.push(Language.Vietnamese);
    }
    if (/\b(SE|SWE|swedish)\b/i.test(languageTitle)) {
        languages.push(Language.Swedish);
    }
    if (languageTitle.includes('finnish')) {
        languages.push(Language.Finnish);
    }
    if (languageTitle.includes('turkish')) {
        languages.push(Language.Turkish);
    }
    if (languageTitle.includes('portuguese')) {
        languages.push(Language.Portuguese);
    }
    if (languageTitle.includes('hebrew')) {
        languages.push(Language.Hebrew);
    }
    if (languageTitle.includes('czech')) {
        languages.push(Language.Czech);
    }
    if (languageTitle.includes('ukrainian')) {
        languages.push(Language.Ukrainian);
    }
    if (languageTitle.includes('catalan')) {
        languages.push(Language.Catalan);
    }
    if (languageTitle.includes('estonian')) {
        languages.push(Language.Estonian);
    }
    if (/\b(ice|Icelandic)\b/i.test(languageTitle)) {
        languages.push(Language.Icelandic);
    }
    if (/\b(chi|chinese)\b/i.test(languageTitle)) {
        languages.push(Language.Chinese);
    }
    if (languageTitle.includes('thai')) {
        languages.push(Language.Thai);
    }
    if (/\b(ita|italian)\b/i.test(languageTitle)) {
        languages.push(Language.Italian);
    }
    if (/\b(german|videomann)\b/i.test(languageTitle)) {
        languages.push(Language.German);
    }
    if (/\b(flemish)\b/i.test(languageTitle)) {
        languages.push(Language.Flemish);
    }
    if (/\b(greek)\b/i.test(languageTitle)) {
        languages.push(Language.Greek);
    }
    if (/\b(FR|FRENCH|VOSTFR|VO|VFF|VFQ|VF2|TRUEFRENCH|SUBFRENCH)\b/i.test(languageTitle)) {
        languages.push(Language.French);
    }
    if (/\b(russian|rus)\b/i.test(languageTitle)) {
        languages.push(Language.Russian);
    }
    if (/\b(norwegian|NO)\b/i.test(languageTitle)) {
        languages.push(Language.Norwegian);
    }
    if (/\b(HUNDUB|HUN|hungarian)\b/i.test(languageTitle)) {
        languages.push(Language.Hungarian);
    }
    if (/\b(HebDub)\b/i.test(languageTitle)) {
        languages.push(Language.Hebrew);
    }
    if (/\b(CZ|SK)\b/i.test(languageTitle)) {
        languages.push(Language.Czech);
    }
    if (/(?<ukrainian>\bukr\b)/i.test(languageTitle)) {
        languages.push(Language.Ukrainian);
    }
    if (/\b(PL|PLDUB|POLISH)\b/i.test(languageTitle)) {
        languages.push(Language.Polish);
    }
    if (/\b(nl|dutch)\b/i.test(languageTitle)) {
        languages.push(Language.Dutch);
    }
    if (/\b(HIN|Hindi)\b/i.test(languageTitle)) {
        languages.push(Language.Hindi);
    }
    if (/\b(TAM|Tamil)\b/i.test(languageTitle)) {
        languages.push(Language.Tamil);
    }
    if (/\b(Arabic)\b/i.test(languageTitle)) {
        languages.push(Language.Arabic);
    }
    if (/\b(Latvian)\b/i.test(languageTitle)) {
        languages.push(Language.Latvian);
    }
    if (/\b(Lithuanian)\b/i.test(languageTitle)) {
        languages.push(Language.Lithuanian);
    }
    if (/\b(RO|Romanian|rodubbed)\b/i.test(languageTitle)) {
        languages.push(Language.Romanian);
    }
    if (/\b(SK|Slovak)\b/i.test(languageTitle)) {
        languages.push(Language.Slovak);
    }
    if (/\b(Brazilian)\b/i.test(languageTitle)) {
        languages.push(Language.Brazilian);
    }
    if (/\b(Persian)\b/i.test(languageTitle)) {
        languages.push(Language.Persian);
    }
    if (/\b(Bengali)\b/i.test(languageTitle)) {
        languages.push(Language.Bengali);
    }
    if (/\b(Bulgarian)\b/i.test(languageTitle)) {
        languages.push(Language.Bulgarian);
    }
    if (/\b(Serbian)\b/i.test(languageTitle)) {
        languages.push(Language.Serbian);
    }
    if (/\b(nordic|NORDICSUBS)\b/i.test(languageTitle)) {
        languages.push(Language.Nordic);
    }
    if (isMulti(languageTitle)) {
        languages.push(Language.English);
    }
    if (languages.length === 0) {
        languages.push(Language.English);
    }
    return [...new Set(languages)];
}
exports.parseLanguage = parseLanguage;
// Reviens-moi (2007) [1080p] BluRay MULTi x264-PopHD
const multiExp = /(?<!(WEB-))\b(MULTi|DUAL|DL)\b/i;
function isMulti(title) {
    const noWebTitle = title.replace(/\bWEB-?DL\b/i, '');
    return multiExp.test(noWebTitle) || undefined;
}
exports.isMulti = isMulti;
