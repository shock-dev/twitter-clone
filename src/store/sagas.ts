import { all } from 'redux-saga/effects';
import tweetSaga from './ducks/tweet/saga';

export default function* rootSaga() {
  yield all([
    tweetSaga()
  ]);
}
