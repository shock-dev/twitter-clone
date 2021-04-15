import { takeEvery, call } from 'redux-saga/effects';
import { TweetsActionType } from './actions';
import TweetApi from '../../../services/api/tweet.api';

function* fetchTweetsRequest(): Generator {
  const data = yield call(TweetApi.fetchTweets);
  console.log(data);
}

function* tweetSaga() {
  yield takeEvery(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest);
}

export default tweetSaga;
