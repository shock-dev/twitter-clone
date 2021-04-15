import { combineReducers } from 'redux';
import { tweet } from './ducks/tweet/reducer';
import { tags } from './ducks/tags/reducer';

const reducerRoot = combineReducers({
  tweet,
  tags
});

export default reducerRoot;
