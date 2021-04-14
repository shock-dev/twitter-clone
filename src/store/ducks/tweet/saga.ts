import { takeEvery } from 'redux-saga/effects';
import { TweetsActionType } from './actions';

function* fetchTweetsRequest() {
  console.log('test');
}

function* tweetSaga() {
  yield takeEvery(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest);
}

export default tweetSaga;
