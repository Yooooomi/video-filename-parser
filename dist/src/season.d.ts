export interface Season {
    releaseTitle: string;
    seriesTitle: string;
    seasons: number[];
    episodeNumbers: number[];
    airDate: Date | null;
    fullSeason: boolean;
    isPartialSeason: boolean;
    isMultiSeason: boolean;
    /**
     * Check to see if this is an "Extras" or "SUBPACK" release, if it is, set
     */
    isSeasonExtra: boolean;
    isSpecial: boolean;
    /**
     * Partial season packs will have a seasonpart group so they can be differentiated from a full season/single episode release
     */
    seasonPart: number;
}
export declare function parseSeason(title: string): Season | null;
export declare const completeRange: (arr: number[]) => number[];
export interface ParsedMatchCollection {
    seriesName: string;
    seriesTitle?: string;
    seasonNumbers?: number[];
    isMultiSeason?: boolean;
    episodeNumbers?: number[];
    isSpecial?: boolean;
    isSeasonExtra?: boolean;
    seasonPart?: number;
    isPartialSeason?: boolean;
    fullSeason?: boolean;
    airDate?: Date;
    releaseTokens?: string;
}
export declare function parseMatchCollection(match: RegExpExecArray, simpleTitle: string): ParsedMatchCollection | null;
