import { combineReducers } from 'redux';
import { tweets } from './ducks/tweets/reducer';
import { tags } from './ducks/tags/reducer';
import { tweet } from './ducks/tweet/reducer';

const reducerRoot = combineReducers({
  tweets,
  tweet,
  tags
});

export default reducerRoot;
