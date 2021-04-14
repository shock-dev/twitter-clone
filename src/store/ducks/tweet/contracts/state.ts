export enum LoadingState {
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER'
}

export interface TweetInterface {
  text: string
  user: {
    fullname: string
    username: string
    avatarUrl: string
  }
}

export interface TweetStateInterface {
  items: TweetInterface[]
  loadingState: LoadingState
}
