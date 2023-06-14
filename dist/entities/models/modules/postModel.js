"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModel = void 0;
const __1 = require("../../..");
const _baseModel_1 = require("./_baseModel");
class PostModel extends _baseModel_1.BaseModel {
    static getBlanc(ownerUserID, image) {
        return {
            postID: __1.generateUUID(),
            ownerUserID,
            image,
            createdAt: new Date().getTime(),
        };
    }
    // ============================================
    // getters
    // ============================================
    get postID() {
        return this.mast.postID;
    }
    get ownerUserID() {
        return this.mast.ownerUserID;
    }
    get createdAt() {
        return this.mast.createdAt;
    }
    get imageURL() {
        return this.mast.image.url || null;
    }
    // ============================================
    // getter / setter
    // ============================================
    get description() {
        return this.mast.description || '';
    }
    set description(input) {
        if (input) {
            this.mast.description = input;
        }
        else {
            this.mast.description = null;
        }
    }
    // ============================================
    // validation
    // ============================================
    get isRegistable() {
        return !!this.imageURL && this.isNew;
    }
    // ============================================
    // functions
    // ============================================
    /**
     * 画像の登録
     * @param file
     */
    async setImage(file) {
        const path = `user/${this.ownerUserID}/post/${this.postID}/${new Date().getTime()}.${file.name}`;
        this.mast.image = await this.repositoryContainer.s3Repository.addFile(path, file);
    }
    /**
     * 投稿を行う
     */
    async register() {
        if (this.isRegistable) {
            this.mast.createdAt = new Date().getTime();
            this.mast = await this.repositoryContainer.postMastRepository.addPost(this.mast);
        }
    }
}
exports.PostModel = PostModel;
