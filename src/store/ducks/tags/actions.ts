import { Action } from 'redux';
import { LoadingState, TagsStateInterface } from './contracts/state';

export enum TagsActionType {
  SET_TAGS = 'tags/SET_TWEETS',
  FETCH_TAGS = 'tags/FETCH_TWEETS',
  SET_LOADING_STATE = 'tags/SET_LOADING_STATE'
}

export interface SetTagsActionInterface extends Action<TagsActionType> {
  type: TagsActionType.SET_TAGS
  payload: TagsStateInterface['items']
}

export interface FetchTagsActionInterface extends Action<TagsActionType> {
  type: TagsActionType.FETCH_TAGS
}

export interface SetTagsLoadingStateActionInterface extends Action<TagsActionType> {
  type: TagsActionType.SET_LOADING_STATE
  payload: LoadingState
}

export const setTags = (payload: TagsStateInterface['items']): SetTagsActionInterface => ({
  type: TagsActionType.SET_TAGS,
  payload
});

export const fetchTags = (): FetchTagsActionInterface => ({
  type: TagsActionType.FETCH_TAGS
});

export const setTagsLoadingState = (payload: LoadingState): SetTagsLoadingStateActionInterface => ({
  type: TagsActionType.SET_LOADING_STATE,
  payload
});

export type TagsAction = SetTagsActionInterface | FetchTagsActionInterface | SetTagsLoadingStateActionInterface
