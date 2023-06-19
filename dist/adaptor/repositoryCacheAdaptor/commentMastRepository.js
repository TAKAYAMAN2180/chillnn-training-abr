"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentMastRepositoryCacheAdaptor = void 0;
const __1 = require("../..");
class CommentMastRepositoryCacheAdaptor {
    constructor(repository) {
        this.repository = repository;
        this.cache = {};
    }
    async addComment(input) {
        const res = await this.repository.addComment(input);
        this.updateCacheEach(res);
        return res;
    }
    async fetchCommentsByPostID(postID) {
        const cache = this.fetchCache(postID);
        if (cache) {
            return cache;
        }
        const res = await this.repository.fetchCommentsByPostID(postID);
        this.updateCacheBulk(postID, res);
        return res.sort((a, b) => __1.compareNumDesc(a.createdAt, b.createdAt));
    }
    updateCacheEach(input) {
        const cache = this.cache[input.postID];
        if (cache) {
            cache[input.commentID] = input;
        }
    }
    updateCacheBulk(postID, comments) {
        // 「this.cache[postID] = {};」→「this.cache[input.postID] = {};」
        this.cache[postID] = {};
        for (const comment of comments) {
            this.updateCacheEach(comment);
        }
    }
    fetchCache(postID) {
        const cache = this.cache[postID];
        if (!cache) {
            return null;
        }
        return Object.keys(cache).map((key) => cache[key]).sort((a, b) => __1.compareNumDesc(a.createdAt, b.createdAt));
    }
}
exports.CommentMastRepositoryCacheAdaptor = CommentMastRepositoryCacheAdaptor;
