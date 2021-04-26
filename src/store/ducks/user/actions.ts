import { Action } from 'redux';
import { UserState } from './contracts/state';
import { LoadingState } from '../../types';
import { LoginFormProps } from '../../../pages/SignIn/components/LoginModal';
import { RegisterFormProps } from '../../../pages/SignIn/components/RegisterModal';

export enum UserActionType {
  SET_USER = 'user/SET_USER',
  SET_LOADING_STATE = 'user/SET_LOADING_STATE',
  FETCH_LOGIN = 'user/FETCH_LOGIN',
  FETCH_REGISTER = 'user/FETCH_REGISTER'
}

export interface SetUserActionInterface extends Action<UserActionType> {
  type: UserActionType.SET_USER
  payload?: UserState['data']
}

export interface SetUserLoadingStateActionInterface extends Action<UserActionType> {
  type: UserActionType.SET_LOADING_STATE
  payload: LoadingState
}

export interface FetchLoginActionInterface extends Action<UserActionType> {
  type: UserActionType.FETCH_LOGIN
  payload: LoginFormProps
}

export interface FetchRegisterActionInterface extends Action<UserActionType> {
  type: UserActionType.FETCH_REGISTER
  payload: RegisterFormProps
}

export const setUser = (payload: UserState['data']): SetUserActionInterface => ({
  type: UserActionType.SET_USER,
  payload
});

export const setUserLoadingState = (payload: LoadingState): SetUserLoadingStateActionInterface => ({
  type: UserActionType.SET_LOADING_STATE,
  payload
});

export const fetchLogin = (payload: LoginFormProps): FetchLoginActionInterface => ({
  type: UserActionType.FETCH_LOGIN,
  payload
});

export const fetchRegister = (payload: RegisterFormProps): FetchRegisterActionInterface => ({
  type: UserActionType.FETCH_REGISTER,
  payload
});

export type UserAction =
  | SetUserActionInterface
  | SetUserLoadingStateActionInterface
  | FetchLoginActionInterface
  | FetchRegisterActionInterface
