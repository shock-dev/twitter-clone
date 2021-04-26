import { RootState } from '../../index';
import { UserState } from './contracts/state';
import { LoadingState } from '../../types';

export const selectUserState = (state: RootState): UserState => state.user;

export const selectUserData = (state: RootState): UserState['data'] => selectUserState(state).data;

export const selectUserStatus = (state: RootState): UserState['status'] => selectUserState(state).status;

export const selectIsAuth = (state: RootState): boolean => !!selectUserState(state).data;

export const selectUserIsLoading = (state: RootState): boolean => selectUserStatus(state) === LoadingState.LOADING;

export const selectUserIsSuccess = (state: RootState): boolean => selectUserStatus(state) === LoadingState.SUCCESS;

export const selectUserIsNever = (state: RootState): boolean => selectUserStatus(state) === LoadingState.NEVER;

export const selectUserIsLoaded = (state: RootState): boolean => selectUserStatus(state) === LoadingState.LOADED;
