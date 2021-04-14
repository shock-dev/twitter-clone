import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import root from './root';

export const store = createStore(root, composeWithDevTools());
