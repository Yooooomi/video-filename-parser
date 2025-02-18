"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseVideoCodec = exports.VideoCodec = void 0;
const x265Exp = /(?<x265>x265)/i;
const h265Exp = /(?<h265>h265)/i;
const x264Exp = /(?<x264>x264)/i;
const h264Exp = /(?<h264>h264)/i;
const WMVExp = /(?<wmv>WMV)/i;
const xvidhdExp = /(?<xvidhd>XvidHD)/i;
const xvidExp = /(?<xvid>X-?vid)/i;
const divxExp = /(?<divx>divx)/i;
const hevcExp = /(?<hevc>HEVC)/i;
const dvdrExp = /(?<dvdr>DVDR)\b/i;
const codecExp = new RegExp([
    x265Exp.source,
    h265Exp.source,
    x264Exp.source,
    h264Exp.source,
    WMVExp.source,
    xvidhdExp.source,
    xvidExp.source,
    divxExp.source,
    hevcExp.source,
    dvdrExp.source,
].join('|'), 'i');
var VideoCodec;
(function (VideoCodec) {
    VideoCodec["X265"] = "x265";
    VideoCodec["X264"] = "x264";
    VideoCodec["H264"] = "h264";
    VideoCodec["H265"] = "h265";
    VideoCodec["WMV"] = "WMV";
    VideoCodec["XVID"] = "xvid";
    VideoCodec["DVDR"] = "dvdr";
})(VideoCodec || (exports.VideoCodec = VideoCodec = {}));
function parseVideoCodec(title) {
    const result = codecExp.exec(title);
    if (result?.groups === undefined) {
        return {};
    }
    const { groups } = result;
    if (groups['h264']) {
        return { codec: VideoCodec.H264, source: groups['h264'] };
    }
    if (groups['h265']) {
        return { codec: VideoCodec.H265, source: groups['h265'] };
    }
    if (groups['x265'] ?? groups['hevc']) {
        return { codec: VideoCodec.X265, source: groups['x265'] ?? groups['hevc'] };
    }
    if (groups['x264']) {
        return { codec: VideoCodec.X264, source: groups['x264'] };
    }
    if (groups['xvidhd'] ?? groups['xvid'] ?? groups['divx']) {
        return { codec: VideoCodec.XVID, source: groups['xvidhd'] ?? groups['xvid'] ?? groups['divx'] };
    }
    if (groups['wmv']) {
        return { codec: VideoCodec.WMV, source: groups['wmv'] };
    }
    if (groups['dvdr']) {
        return { codec: VideoCodec.DVDR, source: groups['dvdr'] };
    }
    return {};
}
exports.parseVideoCodec = parseVideoCodec;
