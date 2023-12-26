export declare enum VideoCodec {
    X265 = "x265",
    X264 = "x264",
    H264 = "h264",
    H265 = "h265",
    WMV = "WMV",
    XVID = "xvid",
    DVDR = "dvdr"
}
export declare function parseVideoCodec(title: string): {
    codec?: VideoCodec;
    source?: string;
};
