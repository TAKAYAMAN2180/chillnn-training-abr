import { CommentMast, ICommentMastRepository } from '../..';
import { Scalars } from '../../entities';
export declare class CommentMastRepositoryCacheAdaptor implements ICommentMastRepository {
    private repository;
    private cache;
    constructor(repository: ICommentMastRepository);
    addComment(input: CommentMast): Promise<CommentMast>;
    fetchCommentsByPostID(postID: Scalars['ID']): Promise<CommentMast[]>;
    private updateCacheEach;
    private updateCacheBulk;
    private fetchCache;
}
