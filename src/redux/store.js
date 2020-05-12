import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { mainReducer, metamaskReducer } from './reducers';
import {settersButtonsStateReducer} from './settersReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
   user: mainReducer,
   metamask: metamaskReducer,
   setters: settersButtonsStateReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
