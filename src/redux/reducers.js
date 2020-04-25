import ServiceWeb3 from '../services/web3-service';
const serviceWeb3 = new ServiceWeb3();

export const SET_ACCOUNT = 'SET_ACCOUNT';
export const LOADING = 'LOADING';
export const OK = 'OK';
export const WRONG = 'WRONG';
export const CONNECT = 'CONNECT';
export const INSTALL = 'INSTALL';

const SET_PROVIDER = 'SET_PROVIDER'

const userState = {
   accountStatus: 'LOADING',
   onConnectClick: null,
   account: '',
   balETH: '',
   balNU: '',
   worker: '',
   isFooterDataLoading: true,
   isManageDataLoading: true,
   isWorklockDataLoading: true,
};

export const metamaskReducer = (state = userState, action) => {
   switch (action.type) {
      case LOADING:
         return { ...state, accountStatus: 'LOADING' };
      case OK:
         return { ...state, accountStatus: 'OK' };
      case WRONG:
         return { ...state, accountStatus: 'WRONG' };
      case CONNECT:
         return { ...state, accountStatus: 'CONNECT', onConnectClick: action.payload };
      case INSTALL:
         return { ...state, accountStatus: 'INSTALL' };
      case SET_ACCOUNT:
         return { ...state, account: action.account };
      case 'SET_FOOTER_DATA':
         return { ...state, footer: action.payload, isFooterDataLoading: action.bool };
      case 'SET_MANAGE_DATA':
         return { ...state, manage: action.payload, isManageDataLoading: action.bool };
      case 'SET_WORKLOCK_DATA':
         return { ...state, worklock: action.payload, isWorklockDataLoading: false };
      case 'SET_BLOCKCHAIN_SETTERS':
         return { ...state, setters: action.payload };
      // case 'SET_FOOTER_STATUS':
      //    return { ...state, isFooterDataLoading: action.payload };
      default:
         return state;
   }
};

const setStatus = (value, handleClick) => ({ type: value, payload: handleClick });

export const themeReducer = (state = { darkMode: true }, action) => {
   if (action.type === 'SWITCH_THEME') {
      return { ...state, darkMode: !state.darkMode };
   }
   return state;
};

export const setAccount = account => ({ type: SET_ACCOUNT, account });

const _setFooterData = payload => ({ type: 'SET_FOOTER_DATA', payload });
export const setManageData = (payload, bool) => ({ type: 'SET_MANAGE_DATA', payload, bool: bool });
export const setWorklockData = (payload, bool) => ({ type: 'SET_WORKLOCK_DATA', payload, bool: bool });
const _setBlockchainSetters = payload => ({ type: 'SET_BLOCKCHAIN_SETTERS', payload });

// thunk
// export const setAccountThunk = () => dispatch => {,
//    const account = window.ethereum.selectedAddress;
//    dispatch(setAccount(window.ethereum.selectedAddress));
//    dispatch(setStatus(OK));
// };

export const getDataThunk = () => dispatch => {
   dispatch(setStatus(OK));
   dispatch(setAccount(window.ethereum.selectedAddress));

   serviceWeb3.getFooterData().then(payload => dispatch(_setFooterData(payload)));
   serviceWeb3.getManageData().then(payload => dispatch(setManageData(payload, false)));
   serviceWeb3.getWorklockData().then(payload => dispatch(setWorklockData(payload, false)));
   serviceWeb3.getSetters().then(payload => {
      dispatch(_setBlockchainSetters(payload));
   });
};

export const setStatusThunk = (value, payload) => dispatch => {
   dispatch(setStatus(value, payload));
   if (value === INSTALL || value === CONNECT){
      // console.log('reducer.js');
      serviceWeb3.getFooterData().then(payload => dispatch(_setFooterData(payload)));
   }
};


// export const getFooterData = () => dispatch => {
//    serviceWeb3.getFooterData().then(data => dispatch(_setFooterData(data)));
// };
// export const getManageData = () => dispatch => {
//    serviceWeb3.getManageData().then(payload => dispatch(_setManageData(payload)));
// };
