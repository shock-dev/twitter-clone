import produce, { Draft } from 'immer';
import { LoadingState, TweetDataStateInterface } from './contracts/state';
import { TweetActionType, TweetDataAction } from './actions';

const initialTweetDataState: TweetDataStateInterface = {
  data: undefined,
  loadingState: LoadingState.NEVER
};

export const tweet = produce((draft: Draft<TweetDataStateInterface>, action: TweetDataAction) => {
  switch (action.type) {
    case TweetActionType.SET_DATA:
      draft.data = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case TweetActionType.FETCH_DATA:
      draft.data = undefined;
      draft.loadingState = LoadingState.LOADING;
      break;

    case TweetActionType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;

    default:
      break;
  }
}, initialTweetDataState);
