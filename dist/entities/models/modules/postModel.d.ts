import { S3Object, Scalars } from '../..';
import { PostMast } from '../../type';
import { BaseModel } from './_baseModel';
import { CommentModel } from './commentModel';
export declare class PostModel extends BaseModel<PostMast> {
    static getBlanc(ownerUserID: Scalars['ID'], image: S3Object): PostMast;
    get postID(): string;
    get ownerUserID(): string;
    get createdAt(): number;
    get imageURL(): string | null;
    get description(): string;
    set description(input: string);
    get isRegistable(): boolean;
    /**
     * 画像の登録
     * @param file
     */
    setImage(file: File): Promise<void>;
    /**
     * 投稿を行う
     */
    register(): Promise<void>;
    /**
     * この投稿のコメントの情報を取得する
     */
    fetchThisComments(): Promise<CommentModel[]>;
    createNewComments(): Promise<CommentModel | null>;
}
