import { combineReducers } from 'redux';
import { tweet } from './ducks/tweet/reducer';

const root = combineReducers({
  tweet
});

export default root;
