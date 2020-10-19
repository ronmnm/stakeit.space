import * as t from "./actionTypes.js"
import ServiceWeb3 from "../services/web3-service"
import GetActionHistory from "../services/actions-history-service.js"

const serviceWeb3 = new ServiceWeb3()
const accountHistory = new GetActionHistory()

const userState = {
  darkMode: true,
  account: "",
  balETH: "",
  balanceNu: 0,
  worker: "",
  isFooterDataLoading: true,
  isManageDataLoading: true,
  isActionHistoryDataLoading: true,
  isWorklockDataLoading: true,
  worklock: {},
  manage: {},
  actionHistory: null
}
export const metamaskInitialState = {
  accountStatus: "LOADING",
  onConnectClick: null,
}

export const metamaskReducer = (state = metamaskInitialState, action) => {
  switch (action.type) {
    case t.LOADING:
      return { ...state, accountStatus: "LOADING" }
    case t.OK:
      return { ...state, accountStatus: "OK" }
    case t.WRONG:
      return { ...state, accountStatus: "WRONG" }
    case t.CONNECT:
      return { ...state, accountStatus: "CONNECT", onConnectClick: action.payload }
    case t.INSTALL:
      return { ...state, accountStatus: "INSTALL" }
    default:
      return state
  }
}

export const mainReducer = (state = userState, action) => {
  switch (action.type) {
    case t.SET_ACCOUNT_AND_NU:
      return { ...state, account: action.account, balanceNu: action.balanceNu }
    case t.SET_FOOTER_DATA:
      return { ...state, footer: action.payload, isFooterDataLoading: action.bool }
    case t.SET_MANAGE_DATA:
      return { ...state, manage: action.payload, isManageDataLoading: action.bool }
    case t.SET_ACTION_HISTORY_DATA:
      // console.log(action.payload);
      return { ...state, actionHistory: action.payload, isActionHistoryDataLoading: action.bool }

    case t.SET_RESTAKE_STATUS:
      return { ...state, manage: { ...state.manage, reStakeDisabled: !action.payload } }
    case t.SET_WINDDOWN_STATUS:
      return { ...state, manage: { ...state.manage, windDown: action.payload } }
    case t.SET_WORKER_ADDRESS:
      return { ...state, manage: { ...state.manage, worker: action.payload } }

    case t.SET_WORKLOCK_DATA:
      return { ...state, worklock: action.payload, isWorklockDataLoading: action.bool }
    case "SET_BLOCKCHAIN_SETTERS":
      return { ...state, setters: action.payload }

    case "SWITCH_THEME":
      const darkModeValue = JSON.parse(localStorage.getItem("darkmode"))
      localStorage.setItem(
        "darkmode",
        JSON.stringify({ darkMode: darkModeValue ? !darkModeValue.darkMode : !state.darkMode })
      )
      return { ...state, darkMode: !state.darkMode }
    default:
      return state
  }
}

const setStatus = (value, handleClick) => ({ type: value, payload: handleClick })

export const setAccount = ({ account, balanceNu }) => ({ type: t.SET_ACCOUNT_AND_NU, account, balanceNu })

const _setFooterData = payload => ({ type: t.SET_FOOTER_DATA, payload })
const _setBlockchainSetters = payload => ({ type: "SET_BLOCKCHAIN_SETTERS", payload })
export const setManageData = (payload, bool) => ({ type: t.SET_MANAGE_DATA, payload, bool: bool })
export const setWorklockData = (payload, bool) => ({ type: t.SET_WORKLOCK_DATA, payload, bool: bool })

export const getDataThunk = () => dispatch => {
  // dispatch(setAccount({ account: window.ethereum.selectedAddress, balanceNu: 0 }));

  serviceWeb3.getStakeData().then(payload => {
    dispatch(setAccount(payload))
    dispatch(setStatus(t.OK))
  })
  serviceWeb3.getFooterData().then(payload => dispatch(_setFooterData(payload)))
  serviceWeb3.getManageData().then(payload => dispatch(setManageData(payload, false)))
  accountHistory.getActionHistory().then(payload => dispatch({type: t.SET_ACTION_HISTORY_DATA, payload, bool: false}))
  serviceWeb3.getWorklockData().then(payload => dispatch(setWorklockData(payload, false)))
  serviceWeb3.getSetters().then(payload => dispatch(_setBlockchainSetters(payload)))
}

export const setStatusThunk = (value, payload) => dispatch => {
  dispatch(setStatus(value, payload))
  if (value === t.INSTALL || value === t.CONNECT) {
    serviceWeb3.getFooterData().then(payload => dispatch(_setFooterData(payload)))
  }
}
