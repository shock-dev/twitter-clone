export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER'
}

export enum AddFormState {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER'
}

export interface TweetsInterface {
  _id: string
  text: string
  createdAt: string
  user: {
    fullname: string
    username: string
    avatarUrl: string
  }
}

export interface TweetsStateInterface {
  items: TweetsInterface[]
  loadingState: LoadingState
  addFormState: AddFormState
}
