import { describe, expect, it, test } from '@jest/globals';

import { filenameParse, Language, Resolution, Source, VideoCodec } from '../src';
import { AudioCodec } from '../src/audioCodec';

describe('filenameParse', () => {
  const movieCases: Array<[string, any]> = [
    [
      'Whats.Eating.Gilbert.Grape.1993.720p.BluRay.x264-SiNNERS',
      expect.objectContaining({
        resolution: Resolution.R720P,
        sources: [Source.BLURAY],
        title: 'Whats Eating Gilbert Grape',
        year: '1993',
        videoCodec: VideoCodec.X264,
        group: 'SiNNERS',
        revision: { version: 1, real: 0 },
        languages: [Language.English],
      }),
    ],
    [
      'Timecop.1994.PROPER.1080p.BluRay.x264-Japhson',
      expect.objectContaining({
        resolution: Resolution.R1080P,
        sources: [Source.BLURAY],
        title: 'Timecop',
        year: '1994',
        videoCodec: VideoCodec.X264,
        group: 'Japhson',
        revision: { version: 2, real: 0 },
        languages: [Language.English],
      }),
    ],
    [
      'This.is.40.2012.PROPER.UNRATED.720p.BluRay.MULti.x264-Felony',
      expect.objectContaining({
        edition: expect.objectContaining({ unrated: true }),
        resolution: Resolution.R720P,
        sources: [Source.BLURAY],
        title: 'This is 40',
        year: '2012',
        videoCodec: VideoCodec.X264,
        group: 'Felony',
        revision: { version: 2, real: 0 },
        languages: [Language.English],
        multi: true,
      }),
    ],
    [
      'Spider-Man Far from Home.2019.1080p.HDRip.X264.AC3-EVO',
      expect.objectContaining({
        resolution: Resolution.R1080P,
        sources: [Source.WEBDL],
        title: 'Spider-Man Far from Home',
        year: '2019',
        videoCodec: VideoCodec.X264,
        audioCodec: AudioCodec.DOLBY,
        group: 'EVO',
        revision: { version: 1, real: 0 },
        languages: [Language.English],
      }),
    ],
    [
      'Togo 2019 2160p HDR DSNP WEBRip DDPAtmos 5 1 X265-TrollUHD',
      expect.objectContaining({
        resolution: Resolution.R2160P,
        sources: [Source.WEBRIP],
        title: 'Togo',
        year: '2019',
        group: 'TrollUHD',
      }),
    ],
    [
      'Ex Machina 2015 UHD BluRay 2160p DTS-X 7 1 HDR x265 10bit-CHD',
      expect.objectContaining({
        title: 'Ex Machina',
        year: '2015',
        group: 'CHD',
        resolution: Resolution.R2160P,
      }),
    ],
  ];
  test.each(movieCases)('should get filename of "%s"', (title, expected) => {
    expect(filenameParse(title)).toEqual(expected);
  });

  const tvCases: Array<[string, any]> = [
    [
      'Its Always Sunny in Philadelphia S14E04 720p WEB H264-METCON',
      expect.objectContaining({
        resolution: Resolution.R720P,
        sources: [Source.WEBDL],
        title: 'Its Always Sunny in Philadelphia',
        videoCodec: VideoCodec.X264,
        group: 'METCON',
        revision: { version: 1, real: 0 },
        languages: [Language.English],
        seasons: [14],
        episodeNumbers: [4],
        isTv: true,
      }),
    ],
  ];
  it.each(tvCases)('should parse tv shows "%s"', (title, expected) => {
    expect(filenameParse(title, true)).toEqual(expected);
  });

  const dailyTvCases: Array<[string, any]> = [
    [
      'NFL 2019 10 06 Chicago Bears vs Oakland Raiders Highlights 720p HEVC x265-MeGusta',
      expect.objectContaining({
        resolution: Resolution.R720P,
        sources: [Source.WEBDL],
        title: 'NFL',
        videoCodec: VideoCodec.X265,
        group: 'MeGusta',
        revision: { version: 1, real: 0 },
        languages: [Language.English],
        airDate: new Date(2019, 9, 6),
        isTv: true,
      }),
    ],
  ];
  it.each(dailyTvCases)('should parse daily tv shows "%s"', (title, expected) => {
    expect(filenameParse(title, true)).toEqual(expected);
  });
});
