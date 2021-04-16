import { TweetsInterface } from '../../tweets/contracts/state';

export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER'
}

export interface TweetDataStateInterface {
  data?: TweetsInterface
  loadingState: LoadingState
}
