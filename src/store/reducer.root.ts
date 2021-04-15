import { combineReducers } from 'redux';
import { tweets } from './ducks/tweets/reducer';
import { tags } from './ducks/tags/reducer';

const reducerRoot = combineReducers({
  tweets,
  tags
});

export default reducerRoot;
