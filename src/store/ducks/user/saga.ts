import { call, put, takeEvery } from 'redux-saga/effects';
import { FetchLoginActionInterface, setUser, setUserLoadingState, UserActionType } from './actions';
import { LoadingState } from '../../types';
import AuthApi from '../../../services/api/auth.api';

function* fetchLoginRequest({ payload }: FetchLoginActionInterface): any {
  try {
    const { user, token } = yield call(AuthApi.login, payload);
    localStorage.setItem('token', `Bearer ${token}`);
    yield put(setUser(user));
  } catch (e) {
    yield put(setUserLoadingState(LoadingState.ERROR));
  }
}

function* UserSaga() {
  yield takeEvery(UserActionType.FETCH_LOGIN, fetchLoginRequest);
}

export default UserSaga;
