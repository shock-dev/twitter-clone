import { Action } from 'redux';
import { TweetStateInterface } from './contracts/state';

export enum TweetsActionType {
  SET_TWEETS = 'tweet/SET_TWEETS',
  FETCH_TWEETS = 'tweet/FETCH_TWEETS'
}

export interface SetTweetsActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.SET_TWEETS
  payload: TweetStateInterface['items']
}

export interface FetchTweetsActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.FETCH_TWEETS
}

export const setTweets = (payload: TweetStateInterface['items']): SetTweetsActionInterface => ({
  type: TweetsActionType.SET_TWEETS,
  payload
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionType.FETCH_TWEETS
});

export type TweetAction = SetTweetsActionInterface | FetchTweetsActionInterface
