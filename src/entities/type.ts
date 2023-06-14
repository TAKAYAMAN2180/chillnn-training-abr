/* tslint:disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDate: string;
  AWSDateTime: string;
  AWSEmail: string;
  AWSIPAddress: string;
  AWSJSON: string;
  AWSPhone: string;
  AWSTime: string;
  AWSTimestamp: number;
  AWSURL: string;
};










export enum ErrorCode {
  chillnnTraining_401_notSignIn = 'chillnnTraining_401_notSignIn',
  chillnnTraining_404_resourceNotFound = 'chillnnTraining_404_resourceNotFound',
  chillnnTraining_500_systemError = 'chillnnTraining_500_systemError'
}

export type PostMast = {
  postID: Scalars['ID'];
  ownerUserID: Scalars['ID'];
  image: S3Object;
  description?: Maybe<Scalars['String']>;
  createdAt: Scalars['AWSTimestamp'];
  deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type PostMastInput = {
  postID: Scalars['ID'];
  ownerUserID: Scalars['ID'];
  image: S3ObjectInput;
  description?: Maybe<Scalars['String']>;
  createdAt: Scalars['AWSTimestamp'];
  deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type S3Object = {
  url: Scalars['AWSURL'];
  bucket: Scalars['String'];
  key: Scalars['String'];
  region: Scalars['String'];
};

export type S3ObjectInput = {
  url: Scalars['AWSURL'];
  bucket: Scalars['String'];
  key: Scalars['String'];
  region: Scalars['String'];
};

export type UserMast = {
  userID: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  userIcon?: Maybe<S3Object>;
  createdAt: Scalars['AWSTimestamp'];
  updatedAt: Scalars['AWSTimestamp'];
};

export type UserMastInput = {
  userID: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  userIcon?: Maybe<S3ObjectInput>;
  createdAt: Scalars['AWSTimestamp'];
  updatedAt: Scalars['AWSTimestamp'];
};
