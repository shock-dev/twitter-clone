import { call, put, takeEvery } from 'redux-saga/effects';
import { setTags, setTagsLoadingState, TweetActionType } from './actions';
import TagsApi from '../../../services/api/tags.api';
import { LoadingState } from './contracts/state';

function* fetchTweetDataRequest(): any {
  try {
    const tags = yield call(TagsApi.fetchTags);
    yield put(setTags(tags));
  } catch (e) {
    yield put(setTagsLoadingState(LoadingState.ERROR));
  }
}

function* tweetDataSaga() {
  yield takeEvery(TweetActionType.FETCH_DATA, fetchTweetDataRequest);
}

export default tweetDataSaga;
