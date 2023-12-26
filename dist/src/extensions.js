"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFileExtension = exports.fileExtensions = void 0;
exports.fileExtensions = [
    // Unknown
    '.webm',
    // SDTV
    '.m4v',
    '.3gp',
    '.nsv',
    '.ty',
    '.strm',
    '.rm',
    '.rmvb',
    '.m3u',
    '.ifo',
    '.mov',
    '.qt',
    '.divx',
    '.xvid',
    '.bivx',
    '.nrg',
    '.pva',
    '.wmv',
    '.asf',
    '.asx',
    '.ogm',
    '.ogv',
    '.m2v',
    '.avi',
    '.bin',
    '.dat',
    '.dvr-ms',
    '.mpg',
    '.mpeg',
    '.mp4',
    '.avc',
    '.vp3',
    '.svq3',
    '.nuv',
    '.viv',
    '.dv',
    '.fli',
    '.flv',
    '.wpl',
    // DVD
    '.img',
    '.iso',
    '.vob',
    // HD
    '.mkv',
    '.mk3d',
    '.ts',
    '.wtv',
    // Bluray
    '.m2ts',
];
const fileExtensionExp = /\.[a-z0-9]{2,4}$/i;
function removeFileExtension(title) {
    return title.replace(fileExtensionExp, (x) => {
        if (exports.fileExtensions.some(ext => ext === x)) {
            return '';
        }
        return x;
    });
}
exports.removeFileExtension = removeFileExtension;
