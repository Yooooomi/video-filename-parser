export interface Edition {
    internal?: boolean;
    limited?: boolean;
    remastered?: boolean;
    extended?: boolean;
    theatrical?: boolean;
    /** Directors cut */
    directors?: boolean;
    unrated?: boolean;
    imax?: boolean;
    fanEdit?: boolean;
    hdr?: boolean;
    /** black and white */
    bw?: boolean;
    /** 3D film */
    threeD?: boolean;
    /** half side by side 3D */
    hsbs?: boolean;
    /** side by side 3D */
    sbs?: boolean;
    /** half over under 3D */
    hou?: boolean;
    /** most 2160p should be UHD but there might be some that aren't? */
    uhd?: boolean;
    /** original aspect ratio */
    oar?: boolean;
    dolbyVision?: boolean;
    hardcodedSubs?: boolean;
    deletedScenes?: boolean;
    bonusContent?: boolean;
}
export declare function parseEdition(title: string): Edition;
