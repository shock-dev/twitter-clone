import { Action } from 'redux';
import { LoadingState, TweetDataStateInterface } from './contracts/state';

export enum TweetActionType {
  SET_DATA = 'tweet/SET_DATA',
  FETCH_DATA = 'tweet/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweet/SET_LOADING_STATE'
}

export interface SetDataTweetActionInterface extends Action<TweetActionType> {
  type: TweetActionType.SET_DATA
  payload: TweetDataStateInterface['data']
}

export interface FetchDataTweetActionInterface extends Action<TweetActionType> {
  type: TweetActionType.FETCH_DATA
}

export interface SetDataTweetLoadingStateActionInterface extends Action<TweetActionType> {
  type: TweetActionType.SET_LOADING_STATE
  payload: LoadingState
}

export const setTags = (payload: TweetDataStateInterface['data']): SetDataTweetActionInterface => ({
  type: TweetActionType.SET_DATA,
  payload
});

export const fetchTags = (): FetchDataTweetActionInterface => ({
  type: TweetActionType.FETCH_DATA
});

export const setTagsLoadingState = (payload: LoadingState): SetDataTweetLoadingStateActionInterface => ({
  type: TweetActionType.SET_LOADING_STATE,
  payload
});

export type TweetDataAction = SetDataTweetActionInterface | FetchDataTweetActionInterface | SetDataTweetLoadingStateActionInterface
