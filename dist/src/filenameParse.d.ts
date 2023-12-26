import { Channels } from './audioChannels.js';
import { AudioCodec } from './audioCodec.js';
import { Edition } from './edition.js';
import { Language } from './language.js';
import { Revision } from './quality.js';
import { Resolution } from './resolution.js';
import { Season } from './season.js';
import { Source } from './source.js';
import { VideoCodec } from './videoCodec.js';
type ParsedTvInfo = Omit<Season, 'releaseTitle' | 'seriesTitle'>;
interface BaseParsed {
    title: string;
    year: string | null;
    edition: Edition;
    resolution?: Resolution;
    sources: Source[];
    videoCodec?: VideoCodec;
    audioCodec?: AudioCodec;
    audioChannels?: Channels;
    group: string | null;
    revision: Revision;
    languages: Language[];
    multi?: boolean;
    complete?: boolean;
}
export type ParsedMovie = BaseParsed;
export type ParsedShow = ParsedTvInfo & BaseParsed & {
    isTv: true;
};
export type ParsedFilename = ParsedMovie | ParsedShow;
/**
 * @param name release / file name
 * @param isTV
 */
export declare function filenameParse(name: string, isTv?: boolean): ParsedFilename;
export {};
