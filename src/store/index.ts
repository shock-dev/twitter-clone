import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import saga from './saga.root';
import root from './reducer.root';
import { TweetsStateInterface } from './ducks/tweets/contracts/state';
import { TagsStateInterface } from './ducks/tags/contracts/state';
import { TweetDataStateInterface } from './ducks/tweet/contracts/state';
import { UserState } from './ducks/user/contracts/state';

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  tweets: TweetsStateInterface
  tweet: TweetDataStateInterface
  tags: TagsStateInterface
  user: UserState
}

export const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);
