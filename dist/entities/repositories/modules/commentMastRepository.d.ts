import { CommentMast, Scalars } from '../../type';
export interface ICommentMastRepository {
    addComment(input: CommentMast): Promise<CommentMast>;
    fetchCommentsByPostID(postID: Scalars['ID']): Promise<CommentMast[]>;
}
