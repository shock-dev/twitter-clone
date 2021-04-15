import { combineReducers } from 'redux';
import { tweet } from './ducks/tweet/reducer';

const reducerRoot = combineReducers({
  tweet
});

export default reducerRoot;
