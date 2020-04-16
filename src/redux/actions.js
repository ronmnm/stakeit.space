import * as _ from './const'



export const setConnectedAddressAC = (connectedAddress) => ({
   type: _.SET_CONNECTED_ADDRESS,
   connectedAddress,
});

export const updateConnectedAddressAC = (connectedAddress) => ({
   type: _.UPDATE_CONNECTED_ADDRESS,
   connectedAddress,
});

export const setStatusAC = (status, payload) => ({
   type: status,
   payload: payload
});