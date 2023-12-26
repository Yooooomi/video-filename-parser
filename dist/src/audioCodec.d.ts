export declare enum AudioCodec {
    MP3 = "MP3",
    MP2 = "MP2",
    DOLBY = "Dolby Digital",
    EAC3 = "Dolby Digital Plus",
    AAC = "AAC",
    FLAC = "FLAC",
    DTS = "DTS",
    DTSHD = "DTS-HD",
    TRUEHD = "Dolby TrueHD",
    OPUS = "Opus",
    VORBIS = "Vorbis",
    PCM = "PCM",
    LPCM = "LPCM"
}
export declare function parseAudioCodec(title: string): {
    codec?: AudioCodec;
    source?: string;
};
