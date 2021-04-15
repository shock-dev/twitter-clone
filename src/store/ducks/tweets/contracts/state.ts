export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER'
}

export interface TweetsInterface {
  _id: string
  text: string
  user: {
    fullname: string
    username: string
    avatarUrl: string
  }
}

export interface TweetsStateInterface {
  items: TweetsInterface[]
  loadingState: LoadingState
}
