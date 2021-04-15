import { Action } from 'redux';
import { LoadingState, TweetStateInterface } from './contracts/state';

export enum TweetsActionType {
  SET_TWEETS = 'tweet/SET_TWEETS',
  FETCH_TWEETS = 'tweet/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweet/SET_LOADING_STATE'
}

export interface SetTweetsActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.SET_TWEETS
  payload: TweetStateInterface['items']
}

export interface FetchTweetsActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.FETCH_TWEETS
}

export interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.SET_LOADING_STATE
  payload: LoadingState
}

export const setTweets = (payload: TweetStateInterface['items']): SetTweetsActionInterface => ({
  type: TweetsActionType.SET_TWEETS,
  payload
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionType.FETCH_TWEETS
});

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionInterface => ({
  type: TweetsActionType.SET_LOADING_STATE,
  payload
});

export type TweetAction = SetTweetsActionInterface | FetchTweetsActionInterface | SetTweetsLoadingStateActionInterface
