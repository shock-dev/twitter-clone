import { call, put, takeEvery } from 'redux-saga/effects';
import { setTweets, setTweetsLoadingState, TweetsActionType } from './actions';
import TweetApi from '../../../services/api/tweet.api';
import { LoadingState } from './contracts/state';

function* fetchTweetsRequest(): any {
  try {
    const tweets = yield call(TweetApi.fetchTweets);
    yield put(setTweets(tweets));
  } catch (e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

function* tweetSaga() {
  yield takeEvery(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest);
}

export default tweetSaga;
