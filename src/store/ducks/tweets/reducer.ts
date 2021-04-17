import produce, { Draft } from 'immer';
import { AddFormState, LoadingState, TweetsStateInterface } from './contracts/state';
import { TweetsAction, TweetsActionType } from './actions';

const initialTweetsState: TweetsStateInterface = {
  items: [],
  loadingState: LoadingState.NEVER,
  addFormState: AddFormState.NEVER
};

export const tweets = produce((draft: Draft<TweetsStateInterface>, action: TweetsAction) => {
  switch (action.type) {
    case TweetsActionType.SET_TWEETS:
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case TweetsActionType.FETCH_TWEETS:
      draft.items = [];
      draft.loadingState = LoadingState.LOADING;
      break;

    case TweetsActionType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;

    case TweetsActionType.ADD_TWEET:
      draft.items.push(action.payload);
      draft.addFormState = AddFormState.NEVER;
      break;

    case TweetsActionType.FETCH_ADD_TWEET:
      draft.addFormState = AddFormState.LOADING;
      break;

    case TweetsActionType.SET_ADD_FORM_STATE:
      draft.addFormState = action.payload;
      break;

    default:
      break;
  }
}, initialTweetsState);
