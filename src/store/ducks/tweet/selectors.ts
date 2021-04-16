import { RootState } from '../../index';
import { LoadingState, TweetDataStateInterface } from './contracts/state';

export const selectTweet = (state: RootState): TweetDataStateInterface => state.tweet;

export const selectLoadingState = (state: RootState): LoadingState => selectTweet(state).loadingState;

export const selectIsTweetDataLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetData = (state: RootState): TweetDataStateInterface['data'] => selectTweet(state).data;
