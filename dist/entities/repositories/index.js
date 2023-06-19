"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryContainer = void 0;
__exportStar(require("./modules/S3Repository"), exports);
__exportStar(require("./modules/postMastRepository"), exports);
__exportStar(require("./modules/userMastRepository"), exports);
__exportStar(require("./modules/commentMastRepository"), exports);
class RepositoryContainer {
    constructor(
    // object
    s3Repository, //
    // entity
    postMastRepository, userMastRepository, commentMastRepository) {
        this.s3Repository = s3Repository;
        this.postMastRepository = postMastRepository;
        this.userMastRepository = userMastRepository;
        this.commentMastRepository = commentMastRepository;
    }
}
exports.RepositoryContainer = RepositoryContainer;
