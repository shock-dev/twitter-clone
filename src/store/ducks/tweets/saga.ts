import { call, put, takeEvery } from 'redux-saga/effects';
import { FetchAddTweetActionInterface, setTweets, setTweetsLoadingState, TweetsActionType } from './actions';
import TweetsApi from '../../../services/api/tweet.api';
import { LoadingState } from './contracts/state';
import { addTweet } from './actions';

function* fetchTweetsRequest(): any {
  try {
    const tweets = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(tweets));
  } catch (e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

function* fetchAddTweetsRequest({ payload: text }: FetchAddTweetActionInterface): any {
  try {
    const newTweet = {
      _id: Math.random().toString(36).substr(2),
      text,
      user: {
        fullname: 'Test user',
        username: 'test',
        avatarUrl: 'https://source.unsplash.com/random/100x100?3'
      }
    };
    const item = yield call(TweetsApi.addTweet, newTweet);
    yield put(addTweet(item));
  } catch (e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

function* tweetsSaga() {
  yield takeEvery(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeEvery(TweetsActionType.FETCH_ADD_TWEET, fetchAddTweetsRequest);
}

export default tweetsSaga;
