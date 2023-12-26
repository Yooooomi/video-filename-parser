"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("../src/index.js");
const cases = [
    ['Terminator 3 Rise of The Machines 2003 HDDVD XvidHD 720p-NPW', index_js_1.VideoCodec.XVID],
    ['Cloverfield 2008 BRRip XvidHD 720p-NPW', index_js_1.VideoCodec.XVID],
    ['The Interview 2014 1080p WEB-DL x264 AAC MerryXmas', index_js_1.VideoCodec.X264],
    ['Half Baked 1998 HDRip XviD AC3-FLAWL3SS', index_js_1.VideoCodec.XVID],
    ['Hidden Figures 2016 DVDSCR XVID-FrangoAssado', index_js_1.VideoCodec.XVID],
    ['Vice 2018 DVDScr Xvid AC3 HQ Hive-CM8', index_js_1.VideoCodec.XVID],
    ['The Dark Knight[2008]DvDrip-aXXo [pendhu]', undefined],
    ['Bridesmaids[2011][Unrated Edition]DvDrip AC3-aXXo', undefined],
    ['Get Out 2017 BluRay 10Bit 1080p DD5 1 H265-d3g', index_js_1.VideoCodec.H265],
    ['Minions 2015 720p HC HDRip X265 AC3 TiTAN', index_js_1.VideoCodec.X265],
    ["Marvel's The Avengers 2012 BluRay 1080p DD5 1 10Bit H265-d3g", index_js_1.VideoCodec.H265],
    ['Exodus Gods and Kings 2014 MULTi 2160p UHD BluRay x265-SESKAPiLE', index_js_1.VideoCodec.X265],
    ['The Incredibles 2004 BluRay x264-jlw', index_js_1.VideoCodec.X264],
    ['Jack Reacher 2012 720p BluRay X264-AMIABLE', index_js_1.VideoCodec.X264],
    ['Super Troopers 2 2018 1080p WEB-DL H264 AC3-EVO', index_js_1.VideoCodec.H264],
    ['The.Middle.720p.HEVC-MeGusta-Pre', index_js_1.VideoCodec.X265],
    ['Cloud.Atlas.2012.BluRay.1080p.VC1.5.1.WMV-INSECTS', index_js_1.VideoCodec.WMV],
    ['The.Book.Of.Eli.2010.Bluray.VC1.1080P.5.1.WMV-NOVO', index_js_1.VideoCodec.WMV],
];
for (const [title, result] of cases) {
    (0, vitest_1.it)(`parse codec for "${title}"`, () => {
        (0, vitest_1.expect)((0, index_js_1.parseVideoCodec)(title).codec).toEqual(result);
    });
}
