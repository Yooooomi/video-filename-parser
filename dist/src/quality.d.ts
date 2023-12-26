import { Resolution } from './resolution.js';
import { Source } from './source.js';
export declare enum QualityModifier {
    REMUX = "REMUX",
    BRDISK = "BRDISK",
    RAWHD = "RAWHD"
}
export interface QualityModel {
    sources: Source[];
    modifier: QualityModifier | null;
    resolution?: Resolution;
    revision: Revision;
}
export interface Revision {
    version: number;
    real: number;
}
export declare function parseQualityModifyers(title: string): Revision;
export declare function parseQuality(title: string): QualityModel;
