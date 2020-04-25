import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { metamaskReducer } from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ user: metamaskReducer });

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
