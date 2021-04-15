import { RootState } from '../../index';
import { LoadingState, TagsStateInterface } from './contracts/state';
import { createSelector } from 'reselect';

export const selectTags = (state: RootState): TagsStateInterface => state.tags;

export const selectLoadingState = (state: RootState): LoadingState => selectTags(state).loadingState;

export const selectIsTagsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED;

export const selectTagsItems = createSelector(selectTags, (tags) => tags.items);
