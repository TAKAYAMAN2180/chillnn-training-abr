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
exports.ModelFactory = void 0;
const postModel_1 = require("./modules/postModel");
const userModel_1 = require("./modules/userModel");
const commentModel_1 = require("./modules/commentModel");
const _baseModel_1 = require("./modules/_baseModel");
__exportStar(require("./modules/postModel"), exports);
__exportStar(require("./modules/userModel"), exports);
__exportStar(require("./modules/commentModel"), exports);
class ModelFactory {
    constructor(repositoryContainer) {
        this.repositoryContainer = repositoryContainer;
    }
    PostModel(mast, option) {
        return new postModel_1.PostModel(mast, //
        this.repositoryContainer, this, option || _baseModel_1.BaseModel.baseModelOption());
    }
    UserModel(mast, option) {
        return new userModel_1.UserModel(mast, //
        this.repositoryContainer, this, option || _baseModel_1.BaseModel.baseModelOption());
    }
    CommentModel(mast, option) {
        return new commentModel_1.CommentModel(mast, //
        this.repositoryContainer, this, option || _baseModel_1.BaseModel.baseModelOption());
    }
}
exports.ModelFactory = ModelFactory;
