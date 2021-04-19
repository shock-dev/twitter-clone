import produce, { Draft } from 'immer';
import { UserState } from './contracts/state';
import { LoadingState } from '../../types';
import { UserAction, UserActionType } from './actions';

const initialUsersState: UserState = {
  data: undefined,
  status: LoadingState.NEVER
};

export const user = produce((draft: Draft<UserState>, action: UserAction) => {
  switch (action.type) {
    case UserActionType.SET_USER:
      draft.data = action.payload;
      draft.status = LoadingState.SUCCESS;
      break;

    case UserActionType.SET_LOADING_STATE:
      draft.status = action.payload;
      break;

    default:
      break;
  }
}, initialUsersState);
