import { LoadingState } from '../../../types';

export interface UserInterface {
  _id?: string
  email: string
  fullname: string
  username: string
  password: string
  confirm_hash: string
  confirmed?: boolean
  location?: string
  about?: string
  website?: string
}

export interface UserState {
  data?: UserInterface
  status: LoadingState
}
