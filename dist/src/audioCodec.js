"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAudioCodec = exports.AudioCodec = void 0;
const mp3CodecExp = /\b(?<mp3>(LAME(?:\d)+-?(?:\d)+)|(mp3))\b/i;
const mp2CodecExp = /\b(?<mp2>(mp2))\b/i;
const dolbyCodecExp = /\b(?<dolby>(Dolby)|(Dolby-?Digital)|(DD)|(AC3D?))\b/i;
const dolbyAtmosCodecExp = /\b(?<dolbyatmos>(Dolby-?Atmos))\b/i;
const aacAtmosCodecExp = /\b(?<aac>(AAC))(\d?.?\d?)(ch)?\b/i;
const eac3CodecExp = /\b(?<eac3>(EAC3|DDP|DD\+))\b/i;
const flacCodecExp = /\b(?<flac>(FLAC))\b/i;
const dtsCodecExp = /\b(?<dts>(DTS))\b/i;
const dtsHdCodecExp = /\b(?<dtshd>(DTS-?HD)|(DTS(?=-?MA)|(DTS-X)))\b/i;
const trueHdCodecExp = /\b(?<truehd>(True-?HD))\b/i;
const opusCodecExp = /\b(?<opus>(Opus))\b/i;
const vorbisCodecExp = /\b(?<vorbis>(Vorbis))\b/i;
const pcmCodecExp = /\b(?<pcm>(PCM))\b/i;
const lpcmCodecExp = /\b(?<lpcm>(LPCM))\b/i;
const audioCodecExp = new RegExp([
    mp3CodecExp.source,
    mp2CodecExp.source,
    dolbyCodecExp.source,
    dolbyAtmosCodecExp.source,
    aacAtmosCodecExp.source,
    eac3CodecExp.source,
    flacCodecExp.source,
    dtsHdCodecExp.source,
    dtsCodecExp.source,
    trueHdCodecExp.source,
    opusCodecExp.source,
    vorbisCodecExp.source,
    pcmCodecExp.source,
    lpcmCodecExp.source,
].join('|'), 'i');
var AudioCodec;
(function (AudioCodec) {
    AudioCodec["MP3"] = "MP3";
    AudioCodec["MP2"] = "MP2";
    AudioCodec["DOLBY"] = "Dolby Digital";
    AudioCodec["EAC3"] = "Dolby Digital Plus";
    AudioCodec["AAC"] = "AAC";
    AudioCodec["FLAC"] = "FLAC";
    AudioCodec["DTS"] = "DTS";
    AudioCodec["DTSHD"] = "DTS-HD";
    AudioCodec["TRUEHD"] = "Dolby TrueHD";
    AudioCodec["OPUS"] = "Opus";
    AudioCodec["VORBIS"] = "Vorbis";
    AudioCodec["PCM"] = "PCM";
    AudioCodec["LPCM"] = "LPCM";
})(AudioCodec || (exports.AudioCodec = AudioCodec = {}));
function parseAudioCodec(title) {
    const audioResult = audioCodecExp.exec(title);
    if (!audioResult?.groups) {
        return {};
    }
    const { groups } = audioResult;
    if (groups['aac']) {
        return { codec: AudioCodec.AAC, source: groups['aac'] };
    }
    if (groups['dolbyatmos']) {
        return { codec: AudioCodec.EAC3, source: groups['dolbyatmos'] };
    }
    if (groups['dolby']) {
        return { codec: AudioCodec.DOLBY, source: groups['dolby'] };
    }
    if (groups['dtshd']) {
        return { codec: AudioCodec.DTSHD, source: groups['dtshd'] };
    }
    if (groups['dts']) {
        return { codec: AudioCodec.DTS, source: groups['dts'] };
    }
    if (groups['flac']) {
        return { codec: AudioCodec.FLAC, source: groups['flac'] };
    }
    if (groups['truehd']) {
        return { codec: AudioCodec.TRUEHD, source: groups['truehd'] };
    }
    if (groups['mp3']) {
        return { codec: AudioCodec.MP3, source: groups['mp3'] };
    }
    if (groups['mp2']) {
        return { codec: AudioCodec.MP2, source: groups['mp2'] };
    }
    if (groups['pcm']) {
        return { codec: AudioCodec.PCM, source: groups['pcm'] };
    }
    if (groups['lpcm']) {
        return { codec: AudioCodec.LPCM, source: groups['lpcm'] };
    }
    if (groups['opus']) {
        return { codec: AudioCodec.OPUS, source: groups['opus'] };
    }
    if (groups['vorbis']) {
        return { codec: AudioCodec.VORBIS, source: groups['vorbis'] };
    }
    return {};
}
exports.parseAudioCodec = parseAudioCodec;
