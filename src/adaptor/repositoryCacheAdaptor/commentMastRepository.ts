import {CommentMast, compareNumDesc, ICommentMastRepository, IPostMastRepository} from '../..';
import {PostMast, Scalars} from '../../entities';

type PostCache = {
    [postID: string]: {
        [commentID: string]: CommentMast,
    } | null;
};

export class CommentMastRepositoryCacheAdaptor implements ICommentMastRepository {
    private cache: PostCache = {};

    constructor(private repository: ICommentMastRepository) {
    }

    async addComment(input: CommentMast): Promise<CommentMast> {
        const res = await this.repository.addComment(input);
        this.updateCacheEach(res);
        return res;
    }

    async fetchCommentsByPostID(postID: Scalars['ID']): Promise<CommentMast[]> {
        const cache = this.fetchCache(postID);
        if (cache) {
            return cache;
        }
        const res = await this.repository.fetchCommentsByPostID(postID);
        this.updateCacheBulk(postID, res)
        return res.sort((a, b)=>compareNumDesc(a.createdAt, b.createdAt));

    }

    private updateCacheEach(input: CommentMast) {
        const cache = this.cache[input.postID];
        if (cache) {
            cache[input.commentID] = input;
        }
    }

    private updateCacheBulk(postID: Scalars['ID'], comments: CommentMast[]) {
        // 「this.cache[postID] = {};」→「this.cache[input.postID] = {};」
        this.cache[postID] = {};
        for (const comment of comments) {
            this.updateCacheEach(comment);
        }
    }

    private fetchCache(postID: Scalars['ID']) {
        const cache = this.cache[postID];
        if (!cache) {
            return null;
        }
        return Object.keys(cache).map((key) => cache[key]!).sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
    }

}
