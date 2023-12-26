"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("../src/index.js");
const singleCases = [
    ['Whats.Eating.Gilbert.Grape.1993.720p.BluRay', [index_js_1.Source.BLURAY]],
    ['Whats.Eating.Gilbert.Grape.1993.720p.BluRay.x264-SiNNERS', [index_js_1.Source.BLURAY]],
    ['Oceans.Thirteen.2007.iNTERNAL.720p.BluRay.x264-MHQ', [index_js_1.Source.BLURAY]],
    ['Rocketman 2019 2160p UHD BluRay x265-TERMiNAL', [index_js_1.Source.BLURAY]],
    ['Alita Battle Angel 2019 2160p WEB-DL DD+5 1 HEVC-DEFLATE[NO RAR]', [index_js_1.Source.WEBDL]],
    ['Alita: Battle Angel 2019 BRRip AC3 x264-CMRG', [index_js_1.Source.BLURAY]],
    ['The Hateful Eight 2015 DVDScr XVID AC3 HQ Hive-CM8', [index_js_1.Source.SCREENER]],
    ['This Is 40 2012 DVD Screener Xvid UnKnOwN', [index_js_1.Source.SCREENER]],
    ['Brooklyns Finest DVDSCREENER XviD-MENTiON', [index_js_1.Source.SCREENER]],
    ['50 50 2011 SCREENER XviD-REFiLL', [index_js_1.Source.SCREENER]],
    ['True Grit 2010 SCR XViD - IMAGiNE', [index_js_1.Source.SCREENER]],
    ['Tracers 2015 PPV XVID AC3 HQ Hive-CM8', [index_js_1.Source.PPV]],
    ['X-Men Origins Wolverine 2009 WORKPRINT XviD-NoGRP', [index_js_1.Source.WORKPRINT]],
    ['Half Baked 1998 720p HDDVD XVID-AC3-PULSAR', [index_js_1.Source.BLURAY]],
    ['Teenage Mutant Ninja Turtles Turtles Forever 2009 WS PDTV XviD-DVSKY', [index_js_1.Source.TV]],
    ['The Interview 2014 1080p WEB-DL x264 AAC MerryXmas', [index_js_1.Source.WEBDL]],
    ['John Wick Chapter 2 2017 720p WEB-DL X264 AC3-EVO', [index_js_1.Source.WEBDL]],
    ['Into the Storm 720 WEBDL (RUSSiAN & ENGLISH AUDIO)', [index_js_1.Source.WEBDL]],
    ['Michael 1996 1080p AMZN WEBCap DD+5.1 x264-LEGi0N', [index_js_1.Source.WEBRIP]],
    ['Avengers Infinity War 2018 NEW PROPER 720p HD-CAM X264 HQ-LPG', [index_js_1.Source.CAM]],
    ['The Hunger Games Mockingjay - Part 1 (2014) 576p NEW CAM XViD', [index_js_1.Source.CAM]],
    ['Suicide Squad 2016 CAM UnKnOwN', [index_js_1.Source.CAM]],
    ['Star Trek Beyond (2016) ENG Cam V2 XviD UnKnOwN', [index_js_1.Source.CAM]],
    ['Parasite.2019.MULTi.VFI.WEBrip.2160p.HDR.x265.True.HD-Tokuchi', [index_js_1.Source.WEBRIP]],
    ['How You Look At Me 2019 720p AMZN WEBRip AAC2 0 X 264-EVO', [index_js_1.Source.WEBRIP]],
    ['Series Title - S01E11 2020 1080p Viva MKV WEB', [index_js_1.Source.WEBDL]],
    ['Togo 2019 2160p HDR DSNP WEBRip DDPAtmos 5 1 X265-TrollUHD', [index_js_1.Source.WEBRIP]],
    ['Palmer.2021.1080p.APTV.H264.Atmos-EVO', [index_js_1.Source.WEBDL]],
    ['Palmer.2021.1080p.APTV.WEB-RIP.H264.Atmos-EVO', [index_js_1.Source.WEBRIP]],
    ['Finding.Ohana.2021.720p.NF.AAC2.0.X.264-EVO', [index_js_1.Source.WEBDL]],
    ['Finding.Ohana.2021.720p.NF.WEBRIP.AAC2.0.X.264-EVO', [index_js_1.Source.WEBRIP]],
    ['300.2006.iNTERNAL.NTSC.DVD9-FaiLED', [index_js_1.Source.DVD]],
    ['The Card Counter 2021 1080p WEBSCREENER X264-EVO', [index_js_1.Source.SCREENER]],
    ['Movie.Name.2016.German.DTS.DL.1080p.UHDBD.x265-TDO', [index_js_1.Source.BLURAY]],
    ['127.Hours.DVDSCR.NTSC.DVDR-GALAXY', [index_js_1.Source.DVD, index_js_1.Source.SCREENER]],
    ['Movie.Title.2019.1080p.AMZN.WEB-Rip.DDP.5.1.HEVC', [index_js_1.Source.WEBRIP]],
];
for (const [title, result] of singleCases) {
    (0, vitest_1.it)(`parse source "${title}"`, () => {
        (0, vitest_1.expect)((0, index_js_1.parseSource)(title)).toEqual(result);
    });
}
const multipeSourceCases = [
    ['The Office S01-S09 720p BluRay WEB-DL nHD x264-NhaNc3', [index_js_1.Source.BLURAY, index_js_1.Source.WEBDL]],
];
for (const [title, result] of multipeSourceCases) {
    (0, vitest_1.it)(`parse multi source "${title}"`, () => {
        (0, vitest_1.expect)((0, index_js_1.parseSource)(title)).toEqual(result);
    });
}
