import { call, put, takeEvery } from 'redux-saga/effects';
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
    console.log('Вы успешно авторизовались');
  } catch (e) {
    yield put(setUserLoadingState(LoadingState.ERROR));
    console.log('Что то пошло не так');
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

function* UserSaga() {
  yield takeEvery(UserActionType.FETCH_LOGIN, fetchLoginRequest);
  yield takeEvery(UserActionType.FETCH_REGISTER, fetchRegisterRequest);
}

export default UserSaga;
