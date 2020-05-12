import ServiceWeb3Setters from '../services/web3-service-setters';
import * as t from './actionTypes.js';

const serviceWeb3Setters = new ServiceWeb3Setters();

const userSettersState = {
   showRestakeLoader: false,
   showWindDownLoader: false,
   showWorkerLoader: false,
};

export const settersButtonsStateReducer = (state = userSettersState, action) => {
   switch (action.type) {
      case t.SET_SHOW_RESTAKE_LOADER:
         return { ...state, showRestakeLoader: action.payload };
      case t.SET_SHOW_WINDDOWN_LOADER:
         return { ...state, showWindDownLoader: action.payload };
      case t.SET_WORKER_LOADER:
         return { ...state, showWorkerLoader: action.payload}
      default:
         return state;
   }
};

export const setRestakeThunk = bool => dispatch => {
   dispatch({ type: t.SET_SHOW_RESTAKE_LOADER, payload: true });
   serviceWeb3Setters.setRestake(bool)
      .then(() => {
         dispatch({ type: t.SET_RESTAKE_STATUS, payload: bool });
         dispatch({ type: t.SET_SHOW_RESTAKE_LOADER, payload: false });
      })
      .catch(() => {
         dispatch({ type: t.SET_SHOW_RESTAKE_LOADER, payload: false });
      });
};

export const setWindDownThunk = bool => dispatch => {
   dispatch({ type: t.SET_SHOW_WINDDOWN_LOADER, payload: true });
   serviceWeb3Setters.setWinddown(bool)
      .then(() => {
         dispatch({ type: t.SET_WINDDOWN_STATUS, payload: bool });
         dispatch({ type: t.SET_SHOW_WINDDOWN_LOADER, payload: false });
      })
      .catch(() => {
         dispatch({ type: t.SET_SHOW_WINDDOWN_LOADER, payload: false });
      });
};

export const setWorkerThunk = address => dispatch => {
   dispatch({ type: t.SET_WORKER_LOADER, payload: true });
   serviceWeb3Setters.setWorker(address)
      .then(() => {
         dispatch({ type: t.SET_WORKER_ADDRESS, payload: address });
         dispatch({ type: t.SET_WORKER_LOADER, payload: false });
      })
      .catch((err) => {
         console.error(err)
         dispatch({ type: t.SET_WORKER_LOADER, payload: false });
      });
};