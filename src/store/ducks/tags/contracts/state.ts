export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER'
}

export interface TagsInterface {
  _id: string
  name: string
  count: number
}

export interface TagsStateInterface {
  items: TagsInterface[]
  loadingState: LoadingState
}
