import {BaseModel} from './_baseModel';
import {CommentMast, Scalars} from '../../type';
import {generateUUID} from '../../../util';

export class CommentModel extends BaseModel<CommentMast> {
    // 新規のオブジェクトを生成するときに必要
    // 生成するときに、時間、ポストIDのパラメータを付与
    // 呼び出し元から、postIDをもらう
    static getBlanc(postID: Scalars['ID'], commentUserID: Scalars['ID'], comment: Scalars['String']): CommentMast {
        return {
            postID,
            commentUserID,
            commentID: generateUUID(),
            comment,
            createdAt: new Date().getTime(),
        }
    }

    // ============================================
    // getters
    // ============================================
    get postID() {
        return this.mast.postID;
    }

    get commentUserID() {
        return this.mast.commentUserID
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

    set comment(input: string) {
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