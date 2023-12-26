export declare const webdlExp: RegExp;
export declare enum Source {
    BLURAY = "BLURAY",
    WEBDL = "WEBDL",
    WEBRIP = "WEBRIP",
    DVD = "DVD",
    CAM = "CAM",
    SCREENER = "SCREENER",
    PPV = "PPV",
    TELESYNC = "TELESYNC",
    TELECINE = "TELECINE",
    WORKPRINT = "WORKPRINT",
    TV = "TV"
}
interface SourceGroups {
    bluray: boolean;
    webdl: boolean;
    webrip: boolean;
    hdtv: boolean;
    bdrip: boolean;
    brrip: boolean;
    scr: boolean;
    dvdr: boolean;
    dvd: boolean;
    dsr: boolean;
    regional: boolean;
    ppv: boolean;
    ts: boolean;
    tc: boolean;
    cam: boolean;
    workprint: boolean;
    pdtv: boolean;
    sdtv: boolean;
    tvrip: boolean;
}
export declare function parseSourceGroups(title: string): SourceGroups;
export declare function parseSource(title: string): Source[];
export {};
