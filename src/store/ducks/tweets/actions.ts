import { Action } from 'redux';
import { LoadingState, TweetsInterface, TweetsStateInterface } from './contracts/state';

export enum TweetsActionType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
  FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
  ADD_TWEET = 'tweets/ADD_TWEET'
}

export interface SetTweetsActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.SET_TWEETS
  payload: TweetsStateInterface['items']
}

export interface FetchTweetsActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.FETCH_TWEETS
}

export interface FetchAddTweetActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.FETCH_ADD_TWEET
  payload: string
}

export interface AddTweetActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.ADD_TWEET
  payload: TweetsInterface
}

export interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.SET_LOADING_STATE
  payload: LoadingState
}

export const setTweets = (payload: TweetsStateInterface['items']): SetTweetsActionInterface => ({
  type: TweetsActionType.SET_TWEETS,
  payload
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionType.FETCH_TWEETS
});

export const fetchAddTweet = (text: string): FetchAddTweetActionInterface => ({
  type: TweetsActionType.FETCH_ADD_TWEET,
  payload: text
});

export const addTweet = (tweet: TweetsInterface): AddTweetActionInterface => ({
  type: TweetsActionType.ADD_TWEET,
  payload: tweet
});

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionInterface => ({
  type: TweetsActionType.SET_LOADING_STATE,
  payload
});

export type TweetsAction =
  | SetTweetsActionInterface
  | FetchTweetsActionInterface
  | AddTweetActionInterface
  | SetTweetsLoadingStateActionInterface
