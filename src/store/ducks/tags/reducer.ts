import produce, { Draft } from 'immer';
import { LoadingState, TagsStateInterface } from './contracts/state';
import { TagsAction, TagsActionType } from './actions';

const initialTagsState: TagsStateInterface = {
  items: [],
  loadingState: LoadingState.NEVER
};

export const tags = produce((draft: Draft<TagsStateInterface>, action: TagsAction) => {
  switch (action.type) {
    case TagsActionType.SET_TAGS:
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case TagsActionType.FETCH_TAGS:
      draft.items = [];
      draft.loadingState = LoadingState.LOADING;
      break;

    case TagsActionType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;

    default:
      break;
  }
}, initialTagsState);
