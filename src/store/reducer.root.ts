import { combineReducers } from 'redux';
import { tweets } from './ducks/tweets/reducer';
import { tags } from './ducks/tags/reducer';
import { tweet } from './ducks/tweet/reducer';
import { user } from './ducks/user/reducer';

const reducerRoot = combineReducers({
  tweets,
  tweet,
  tags,
  user
});

export default reducerRoot;
