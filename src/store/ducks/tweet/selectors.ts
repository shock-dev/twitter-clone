import { RootState } from '../../index';
import { LoadingState, TweetStateInterface } from './contracts/state';
import { createSelector } from 'reselect';

export const selectTweet = (store: RootState): TweetStateInterface => store.tweet;

export const selectLoadingState = (state: RootState): LoadingState => selectTweet(state).loadingState;

export const selectIsTweetsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectTweetItems = createSelector(selectTweet, (tweet) => tweet.items);
