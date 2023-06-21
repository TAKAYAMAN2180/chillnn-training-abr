import { CommentMast, PostMast, UserMast } from '../type';
import { RepositoryContainer } from '../repositories';
import { PostModel } from './modules/postModel';
import { UserModel } from './modules/userModel';
import { CommentModel } from './modules/commentModel';
import { ModelOption } from './modules/_baseModel';
export * from './modules/postModel';
export * from './modules/userModel';
export * from './modules/commentModel';
export declare class ModelFactory {
    private repositoryContainer;
    constructor(repositoryContainer: RepositoryContainer);
    PostModel(mast: PostMast, option?: ModelOption): PostModel;
    UserModel(mast: UserMast, option?: ModelOption): UserModel;
    CommentModel(mast: CommentMast, option?: ModelOption): CommentModel;
}
