import produce, { Draft } from 'immer';
import { LoadingState, TweetsStateInterface } from './contracts/state';
import { TweetsAction, TweetsActionType } from './actions';

const initialTweetsState: TweetsStateInterface = {
  items: [],
  loadingState: LoadingState.NEVER
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
      break;

    default:
      break;
  }
}, initialTweetsState);
