import { Action } from 'redux';
import { LoadingState, TweetsStateInterface } from './contracts/state';

export enum TweetsActionType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE'
}

export interface SetTweetsActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.SET_TWEETS
  payload: TweetsStateInterface['items']
}

export interface FetchTweetsActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.FETCH_TWEETS
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

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionInterface => ({
  type: TweetsActionType.SET_LOADING_STATE,
  payload
});

export type TweetsAction = SetTweetsActionInterface | FetchTweetsActionInterface | SetTweetsLoadingStateActionInterface
