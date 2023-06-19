import { IPostMastRepository } from './modules/postMastRepository';
import { IS3Repository } from './modules/S3Repository';
import { IUserMastRepository } from './modules/userMastRepository';
import { ICommentMastRepository } from './modules/commentMastRepository';

export * from './modules/S3Repository';
export * from './modules/postMastRepository';
export * from './modules/userMastRepository';
export * from './modules/commentMastRepository';

export class RepositoryContainer {
    constructor(
        // object
        public s3Repository: IS3Repository, //
        // entity
        public postMastRepository: IPostMastRepository,
        public userMastRepository: IUserMastRepository,
        public commentMastRepository: ICommentMastRepository,
    ) {}
}
