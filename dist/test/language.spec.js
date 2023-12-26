"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("../src/index.js");
const languageCases = [
    ['Castle.2009.S01E14.English.HDTV.XviD-LOL', [index_js_1.Language.English]],
    ['Castle.2009.S01E14.French.HDTV.XviD-LOL', [index_js_1.Language.French]],
    [
        'Ouija.Origin.of.Evil.2016.MULTi.TRUEFRENCH.1080p.BluRay.x264-MELBA',
        [index_js_1.Language.French, index_js_1.Language.English],
    ],
    ['Everest.2015.FRENCH.VFQ.BDRiP.x264-CNF30', [index_js_1.Language.French]],
    [
        'Showdown.In.Little.Tokyo.1991.MULTI.VFQ.VFF.DTSHD-MASTER.1080p.BluRay.x264-ZombiE',
        [index_js_1.Language.French, index_js_1.Language.English],
    ],
    ['The.Polar.Express.2004.MULTI.VF2.1080p.BluRay.x264-PopHD', [index_js_1.Language.French, index_js_1.Language.English]],
    ['Castle.2009.S01E14.Spanish.HDTV.XviD-LOL', [index_js_1.Language.Spanish]],
    ['Castle.2009.S01E14.German.HDTV.XviD-LOL', [index_js_1.Language.German]],
    ['Castle.2009.S01E14.Italian.HDTV.XviD-LOL', [index_js_1.Language.Italian]],
    ['Castle.2009.S01E14.Danish.HDTV.XviD-LOL', [index_js_1.Language.Danish]],
    ['Castle.2009.S01E14.Dutch.HDTV.XviD-LOL', [index_js_1.Language.Dutch]],
    ['Castle.2009.S01E14.Japanese.HDTV.XviD-LOL', [index_js_1.Language.Japanese]],
    ['Castle.2009.S01E14.Cantonese.HDTV.XviD-LOL', [index_js_1.Language.Cantonese]],
    ['Castle.2009.S01E14.Mandarin.HDTV.XviD-LOL', [index_js_1.Language.Mandarin]],
    ['Castle.2009.S01E14.Korean.HDTV.XviD-LOL', [index_js_1.Language.Korean]],
    ['Castle.2009.S01E14.Russian.HDTV.XviD-LOL', [index_js_1.Language.Russian]],
    ['Castle.2009.S01E14.Ukrainian.HDTV.XviD-LOL', [index_js_1.Language.Ukrainian]],
    ['Castle.2009.S01E14.Ukr.HDTV.XviD-LOL', [index_js_1.Language.Ukrainian]],
    ['Castle.2009.S01E14.Polish.HDTV.XviD-LOL', [index_js_1.Language.Polish]],
    ['Castle.2009.S01E14.Vietnamese.HDTV.XviD-LOL', [index_js_1.Language.Vietnamese]],
    ['Castle.2009.S01E14.Swedish.HDTV.XviD-LOL', [index_js_1.Language.Swedish]],
    ['Castle.2009.S01E14.Norwegian.HDTV.XviD-LOL', [index_js_1.Language.Norwegian]],
    ['Castle.2009.S01E14.Finnish.HDTV.XviD-LOL', [index_js_1.Language.Finnish]],
    ['Castle.2009.S01E14.Turkish.HDTV.XviD-LOL', [index_js_1.Language.Turkish]],
    ['Castle.2009.S01E14.Czech.HDTV.XviD-LOL', [index_js_1.Language.Czech]],
    ['Castle.2009.S01E14.Portuguese.HDTV.XviD-LOL', [index_js_1.Language.Portuguese]],
    ['Revolution S01E03 No Quarter 2012 WEB-DL 720p Nordic-philipo mkv', [index_js_1.Language.Nordic]],
    ['Constantine.2014.S01E01.WEBRiP.H264.AAC.5.1-NL.SUBS', [index_js_1.Language.Dutch]],
    ['Castle.2009.S01E14.HDTV.XviD.HUNDUB-LOL', [index_js_1.Language.Hungarian]],
    ['Castle.2009.S01E14.HDTV.XviD.ENG.HUN-LOL', [index_js_1.Language.English, index_js_1.Language.Hungarian]],
    ['Castle.2009.S01E14.HDTV.XviD.HUN-LOL', [index_js_1.Language.Hungarian]],
    ['Castle.2009.S01E14.HDTV.XviD.CZ-LOL', [index_js_1.Language.Czech]],
    ['Peter.Rabbit.2.The.Runaway.2021.LATViAN.2160p.UHD.BLURAY.x265-UNDERDOG', [index_js_1.Language.Latvian]],
    [
        'Peter.Rabbit.2.The.Runaway.2021.LiTHUANiAN.2160p.UHD.BLURAY.x265-UNDERDOG',
        [index_js_1.Language.Lithuanian],
    ],
    [
        'Passengers.2016.German.DL.AC3.Dubbed.1080p.WebHD.h264.iNTERNAL-PsO',
        [index_js_1.Language.German, index_js_1.Language.English],
    ],
    ['Smurfs.​The.​Lost.​Village.​2017.​1080p.​BluRay.​HebDub.​x264-​iSrael', [index_js_1.Language.Hebrew]],
    ['The Danish Girl 2015', [index_js_1.Language.English]],
    [
        'Nocturnal Animals (2016) MULTi VFQ English [1080p] BluRay x264-PopHD',
        [index_js_1.Language.English, index_js_1.Language.French],
    ],
    ['Wonder.Woman.2017.720p.BluRay.DD5.1.x264-TayTO.CZ-FTU', [index_js_1.Language.Czech]],
    [
        'Fantastic.Beasts.The.Crimes.Of.Grindelwald.2018.2160p.WEBRip.x265.10bit.HDR.DD5.1-GASMASK',
        [index_js_1.Language.English],
    ],
    [
        'Nick.and.Norahs.Infinite.Playlist.2008.CATALAN.MULTi.1080p.BluRay.x264-DESPACiTO',
        [index_js_1.Language.Catalan, index_js_1.Language.English],
    ],
    [
        'Harry.Potter.And.The.Order.Of.The.Phoenix.2007.CHINESE.2160p.UHD.BluRay.X265-HOA',
        [index_js_1.Language.Chinese],
    ],
    [
        'Seven.Years.of.Night.2018.PL.DUAL.1080p.BluRay.x264-FLAME',
        [index_js_1.Language.Polish, index_js_1.Language.English],
    ],
    ['Tenet.2020.THAI.2160p.UHD.BLURAY.x265-HOA', [index_js_1.Language.Thai]],
    [
        'Tenet 2020 1080p Multi Eng Hin Tam iMax BluRay 10Bit DD5 1 H265-IPT',
        [index_js_1.Language.English, index_js_1.Language.Hindi, index_js_1.Language.Tamil],
    ],
    [
        'The Flying Guillotine 1975 CHI ENG DTS-HD DTS 1080p BluRay x264 HQ-TUSAHD',
        [index_js_1.Language.English, index_js_1.Language.Chinese],
    ],
    [
        'The Incredible Story Of The Giant Pear 2017 SWE DAN DTS-HD DTS MULTISUBS 1080p BluRay x264 HQ-TUSAHD',
        [index_js_1.Language.Danish, index_js_1.Language.Swedish],
    ],
    [
        'Wonder.Woman.1984.2020.PLDUB.DUAL.HDR10Plus.2160p.UHD.BluRay.x265.iNTERNAL-PLHD',
        [index_js_1.Language.Polish, index_js_1.Language.English],
    ],
    ['Wadjda.2012.ARABiC.1080p.BluRay.x264-CONSTANT', [index_js_1.Language.Arabic]],
    ['Arabic.12.1982.1080p.BluRay.x264-ROVERS', [index_js_1.Language.English]],
    ['No.Country.for.Old.Men.1080p.BluRay.x264-HiGHTiMES', [index_js_1.Language.English]],
    ['Cars.2.2011.ESTONiAN.DVDRip.x264-EMX', [index_js_1.Language.Estonian]],
    ['Cars.2.2011.EN.SE.FI.PAL.DVDR-AMIRITE', [index_js_1.Language.English, index_js_1.Language.Swedish]],
    [
        'Cars.2.2011.ENG.DK.NO.ICE.READ.NFO.PAL.DVDR-WILDER',
        [index_js_1.Language.English, index_js_1.Language.Danish, index_js_1.Language.Icelandic, index_js_1.Language.Norwegian],
    ],
    ['Scarface.1983.CE.UNCUT.DVDRip.XviD.iNT-TURKiSO', [index_js_1.Language.English]],
    ['Scarface.1983.20th.AE.iNTERNAL.DVDRip.XviD-MHQ', [index_js_1.Language.English]],
    [
        'The.Conjuring.The.Devil.Made.Me.Do.It.2021.SUBFRENCH.2160p.WEB.H265-McNULTY',
        [index_js_1.Language.French],
    ],
    ['Get.Him.To.The.Greek.UNRATED.FRENCH.720p.BluRay.x264-NERDHD', [index_js_1.Language.French]],
    ['Maennertrip.UNRATED.German.AC3.Dubbed.1080p.Bluray.x264-CIS', [index_js_1.Language.German]],
    ['Maennertrip.TS.MD.German.XViD.iNTERNAL-AOE', [index_js_1.Language.German]],
    ['Maennertrip.EXTENDED.German.AC3.BDRip.XviD-RedRay', [index_js_1.Language.German]],
    ['Get.Him.To.The.Greek.TRUEFRENCH.DVDRip.XviD-REVOLTE', [index_js_1.Language.French]],
    ['The.Social.Network.R5.LD.German.XviD-CinePlexx', [index_js_1.Language.German]],
    ['The.Social.Network.R5.LiNE.XviD-TWiZTED', [index_js_1.Language.English]],
    ['Incassable.TRUE.FRENCH.PROPER.READ.NFO.DVDRiP.DiVX.SBC-KFT', [index_js_1.Language.French]],
    ['Space.Jam.A.New.Legacy.2021.ROMANiAN.2160p.UHD.BLURAY.x265-UNDERDOG', [index_js_1.Language.Romanian]],
    ['Space.Jam.A.New.Legacy.2021.RoDubbed.2160p.UHD.BLURAY.x265-UNDERDOG', [index_js_1.Language.Romanian]],
    ['Space.Jam.A.New.Legacy.2021.RO.2160p.UHD.BLURAY.x265-UNDERDOG', [index_js_1.Language.Romanian]],
    ['Spider-Man.No.Way.Home.2021.SLOVAK.2160p.UHD.BLURAY.x265-UNDERDOG', [index_js_1.Language.Slovak]],
    [
        'A.Serbian.Film.2010.SERBIAN.UnCut.DTS-HD.DTS.NORDICSUBS.1080p.BluRay.x264.HQ-TUSAHD',
        [index_js_1.Language.Serbian, index_js_1.Language.Nordic],
    ],
];
for (const [title, result] of languageCases) {
    (0, vitest_1.it)(`parse language "${title}"`, () => {
        (0, vitest_1.expect)((0, index_js_1.parseLanguage)(title)).toEqual(result);
    });
}
const multiCases = [
    ['Ouija.Origin.of.Evil.2016.MULTi.TRUEFRENCH.1080p.BluRay.x264-MELBA'],
    ['Showdown.In.Little.Tokyo.1991.MULTI.VFQ.VFF.DTSHD-MASTER.1080p.BluRay.x264-ZombiE'],
    ['The.Polar.Express.2004.MULTI.VF2.1080p.BluRay.x264-PopHD'],
    ['Star.Trek.Der.Film.1979.German.DL.2160p.UHD.BluRay.HEVC-UNTHEVC'],
];
for (const [title] of multiCases) {
    (0, vitest_1.it)(`parse multi language "${title}"`, () => {
        (0, vitest_1.expect)((0, index_js_1.isMulti)(title)).toBe(true);
    });
}
