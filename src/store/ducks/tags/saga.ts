import { call, put, takeEvery } from 'redux-saga/effects';
import { setTags, setTagsLoadingState, TagsActionType } from './actions';
import TagsApi from '../../../services/api/tags.api';
import { LoadingState } from './contracts/state';

function* fetchTagsRequest(): any {
  try {
    const tags = yield call(TagsApi.fetchTags);
    yield put(setTags(tags));
  } catch (e) {
    yield put(setTagsLoadingState(LoadingState.ERROR));
  }
}

function* tagsSaga() {
  yield takeEvery(TagsActionType.FETCH_TAGS, fetchTagsRequest);
}

export default tagsSaga;
