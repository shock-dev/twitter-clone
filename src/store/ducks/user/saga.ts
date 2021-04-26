import { call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { FetchLoginActionInterface, FetchRegisterActionInterface, setUser, setUserLoadingState, UserActionType } from './actions';
import { LoadingState } from '../../types';
import AuthApi from '../../../services/api/auth.api';

function* fetchLoginRequest({ payload }: FetchLoginActionInterface): SagaIterator {
  try {
    yield put(setUserLoadingState(LoadingState.LOADING));
    const { user, token } = yield call(AuthApi.login, payload);
    localStorage.setItem('token', `Bearer ${token}`);
    yield put(setUser(user));
    yield put(setUserLoadingState(LoadingState.SUCCESS));
  } catch (e) {
    yield put(setUserLoadingState(LoadingState.ERROR));
  }
}

function* fetchRegisterRequest({ payload }: FetchRegisterActionInterface): SagaIterator {
  try {
    yield put(setUserLoadingState(LoadingState.LOADING));
    const { user } = yield call(AuthApi.register, payload);
    yield put(setUser(user));
    yield put(setUserLoadingState(LoadingState.SUCCESS));
  } catch (e) {
    yield put(setUserLoadingState(LoadingState.ERROR));
  }
}

function* fetchUserDataRequest(): SagaIterator {
  try {
    yield put(setUserLoadingState(LoadingState.LOADING));
    const user = yield call(AuthApi.getMe);
    yield put(setUser(user));
    yield put(setUserLoadingState(LoadingState.SUCCESS));
  } catch (e) {
    yield put(setUserLoadingState(LoadingState.ERROR));
  }
}

function* UserSaga() {
  yield takeLatest(UserActionType.FETCH_LOGIN, fetchLoginRequest);
  yield takeLatest(UserActionType.FETCH_REGISTER, fetchRegisterRequest);
  yield takeLatest(UserActionType.FETCH_USER_DATA, fetchUserDataRequest);
}

export default UserSaga;
