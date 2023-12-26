export declare enum Channels {
    SEVEN = "7.1",
    SIX = "5.1",
    STEREO = "stereo",
    MONO = "mono"
}
export declare function parseAudioChannels(title: string): {
    channels?: Channels;
    source?: string;
};
