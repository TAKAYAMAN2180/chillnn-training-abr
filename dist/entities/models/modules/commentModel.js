"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = void 0;
const _baseModel_1 = require("./_baseModel");
const util_1 = require("../../../util");
class CommentModel extends _baseModel_1.BaseModel {
    // 新規のオブジェクトを生成するときに必要
    // 生成するときに、時間、ポストIDのパラメータを付与
    // 呼び出し元から、postIDをもらう
    static getBlanc(postID, commentUserID, comment) {
        return {
            postID,
            commentUserID,
            commentID: util_1.generateUUID(),
            comment,
            createdAt: new Date().getTime(),
        };
    }
    // ============================================
    // getters
    // ============================================
    get postID() {
        return this.mast.postID;
    }
    get commentUserID() {
        return this.mast.commentUserID;
    }
    get commentID() {
        return this.mast.commentID;
    }
    get createdAt() {
        return this.mast.createdAt;
    }
    // ============================================
    // getter / setter
    // ============================================
    get comment() {
        return this.mast.comment;
    }
    set comment(input) {
        this.mast.comment = input;
    }
    // ============================================
    // validation
    // ============================================
    get isRegistable() {
        return !!this.comment && this.isNew;
    }
    /**
     * 投稿を行う
     */
    async register() {
        if (this.isRegistable) {
            this.mast.createdAt = new Date().getTime();
            this.mast = await this.repositoryContainer.commentMastRepository.addComment(this.mast);
        }
    }
}
exports.CommentModel = CommentModel;
