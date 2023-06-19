import { IPostMastRepository } from './modules/postMastRepository';
import { IS3Repository } from './modules/S3Repository';
import { IUserMastRepository } from './modules/userMastRepository';
import { ICommentMastRepository } from './modules/commentMastRepository';
export * from './modules/S3Repository';
export * from './modules/postMastRepository';
export * from './modules/userMastRepository';
export * from './modules/commentMastRepository';
export declare class RepositoryContainer {
    s3Repository: IS3Repository;
    postMastRepository: IPostMastRepository;
    userMastRepository: IUserMastRepository;
    commentMastRepository: ICommentMastRepository;
    constructor(s3Repository: IS3Repository, //
    postMastRepository: IPostMastRepository, userMastRepository: IUserMastRepository, commentMastRepository: ICommentMastRepository);
}
