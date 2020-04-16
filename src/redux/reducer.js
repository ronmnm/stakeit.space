import { combineReducers } from 'redux';
import * as _ from './const';

const LOADING = 'LOADING';
const OK = 'OK';
const WRONG = 'WRONG';
const CONNECT = 'CONNECT';
const INSTALL = 'INSTALL';

const initialState = {
   address: '',
   status: 'LOADING'
}

const addressReducer = (state = {address:''}, action) => {
   switch (action.type) {
      case _.SET_CONNECTED_ADDRESS:
         return { ...state, address: action.connectedAddress };
      case _.UPDATE_CONNECTED_ADDRESS:
         return { ...state, address: action.connectedAddress };
      default:
         return state;
   }
};
const statusReducer = (state = {}, action) => {
   switch (action.type) {
      case LOADING:
         return { ...state, status: 'LOADING' };
      case OK:
         return { ...state, status: 'OK' };
      case WRONG:
         return { ...state, status: 'WRONG' };
      case CONNECT:
         return { ...state, status: 'CONNECT', onConnectClick: action.payload };
      case INSTALL:
         return { ...state, status: 'INSTALL' };
      default:
         return state;
   }
};

const rootReducer = combineReducers({address: addressReducer, status: statusReducer});

export default rootReducer;
