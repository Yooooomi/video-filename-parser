export declare enum Resolution {
    R2160P = "2160P",
    R1080P = "1080P",
    R720P = "720P",
    R576P = "576P",
    R540P = "540P",
    R480P = "480P"
}
export declare function parseResolution(title: string): {
    resolution?: Resolution;
    source?: string;
};
