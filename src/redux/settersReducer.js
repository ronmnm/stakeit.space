import ServiceWeb3Setters from '../services/web3-service-setters';
import * as t from './actionTypes.js';

const serviceWeb3Setters = new ServiceWeb3Setters();

const userSettersState = {
   showRestakeLoader: false,
   showWindDownLoader: false,
};

export const settersButtonsStateReducer = (state = userSettersState, action) => {
   switch (action.type) {
      case t.SET_RESTAKE_CLICKED:
         return { ...state, showRestakeLoader: action.payload };
      case t.SET_WINDDOWN_CLICKED:
         return { ...state, showWindDownLoader: action.payload };
      default:
         return state;
   }
};

export const setRestakeThunk = bool => dispatch => {
   dispatch({ type: t.SET_RESTAKE_CLICKED, payload: true });
   serviceWeb3Setters.setRestake(bool)
      .then(() => {
         dispatch({ type: t.SET_RESTAKE_STATUS, payload: bool });
         dispatch({ type: t.SET_RESTAKE_CLICKED, payload: false });
      })
      .catch(() => {
         dispatch({ type: t.SET_RESTAKE_CLICKED, payload: false });
      });
};
export const setWindDownThunk = bool => dispatch => {
   dispatch({ type: t.SET_WINDDOWN_CLICKED, payload: true });
   serviceWeb3Setters.setWinddown(bool)
      .then(() => {
         dispatch({ type: t.SET_WINDDOWN_STATUS, payload: bool });
         dispatch({ type: t.SET_WINDDOWN_CLICKED, payload: false });
      })
      .catch(() => {
         dispatch({ type: t.SET_WINDDOWN_CLICKED, payload: false });
      });
};