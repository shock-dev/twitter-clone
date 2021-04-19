import { call, put, takeEvery } from 'redux-saga/effects';
import { FetchDataTweetActionInterface, setTweetData, setTweetDataLoadingState, TweetActionType } from './actions';
import TweetsApi from '../../../services/api/tweet.api';
import { LoadingState } from './contracts/state';
import { TweetsInterface } from '../tweets/contracts/state';

function* fetchTweetDataRequest({ payload: tweetId }: FetchDataTweetActionInterface): any {
  try {
    const tweetData: TweetsInterface = yield call(TweetsApi.fetchTweetData, tweetId);
    yield put(setTweetData(tweetData));
  } catch (e) {
    yield put(setTweetDataLoadingState(LoadingState.ERROR));
  }
}

function* tweetDataSaga() {
  yield takeEvery(TweetActionType.FETCH_DATA, fetchTweetDataRequest);
}

export default tweetDataSaga;
