import {S3Object, Scalars} from '../..';
import {generateUUID} from '../../..';
import {PostMast} from '../../type';
import {BaseModel} from './_baseModel';
import {CommentModel} from './commentModel';

export class PostModel extends BaseModel<PostMast> {
    static getBlanc(ownerUserID: Scalars['ID'], image: S3Object): PostMast {
        return {
            postID: generateUUID(),
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
        return this.mast.description || ''
    }

    set description(input: string) {
        if (input) {
            this.mast.description = input;
        } else {
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
    async setImage(file: File) {
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

    /**
     * この投稿のコメントの情報を取得する
     */
    async fetchThisComments(): Promise<CommentModel[]> {
        const res = await this.repositoryContainer.commentMastRepository.fetchCommentsByPostID(this.postID);
        return res.map((item) => this.modelFactory.CommentModel(item));
    }

    async createNewComments(): Promise<CommentModel|null> {
        const myUser = await this.repositoryContainer.userMastRepository.fetchMyUserMast();
        return myUser && this.modelFactory.CommentModel(CommentModel.getBlanc(this.postID, myUser.userID, ''),{
            isNew: true,
        });
    }
}