import { call, put, takeEvery } from 'redux-saga/effects';
import { FetchAddTweetActionInterface, setAddFormState, setTweets, setTweetsLoadingState, TweetsActionType } from './actions';
import TweetsApi from '../../../services/api/tweet.api';
import { AddFormState, LoadingState } from './contracts/state';
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
    const item = yield call(TweetsApi.addTweet, text);
    yield put(addTweet(item));
  } catch (e) {
    yield put(setAddFormState(AddFormState.ERROR));
  }
}

function* tweetsSaga() {
  yield takeEvery(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeEvery(TweetsActionType.FETCH_ADD_TWEET, fetchAddTweetsRequest);
}

export default tweetsSaga;
