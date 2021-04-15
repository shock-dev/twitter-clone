import { all } from 'redux-saga/effects';
import tweetSaga from './ducks/tweet/saga';
import tagsSaga from './ducks/tags/saga';

export default function* rootSaga() {
  yield all([
    tweetSaga(),
    tagsSaga()
  ]);
}
