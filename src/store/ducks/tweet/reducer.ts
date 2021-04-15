import produce, { Draft } from 'immer';
import { LoadingState, TweetStateInterface } from './contracts/state';
import { TweetAction, TweetsActionType } from './actions';

const initialTweetState: TweetStateInterface = {
  items: [],
  loadingState: LoadingState.NEVER
};

export const tweet = produce((draft: Draft<TweetStateInterface>, action: TweetAction) => {
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

    default:
      break;
  }
}, initialTweetState);
