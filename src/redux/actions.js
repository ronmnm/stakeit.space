import * as _ from './reducers'



export const setConnectedAddressAC = (connectedAddress) => ({
   type: _.SET_CONNECTED_ADDRESS,
   connectedAddress,
});


export const setStatusAC = (status, payload) => ({
   type: status,
   payload: payload
});
