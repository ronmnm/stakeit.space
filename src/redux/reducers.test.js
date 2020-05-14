import { metamaskReducer, metamaskInitialState } from './reducers';
import * as t from './actionTypes';

// Metamask reducer testing
describe('testing metamask status reducer', () => {
   it('should be OK', () => {
      const action = {
         type: t.OK,
      };
      expect(metamaskReducer(metamaskInitialState, action).accountStatus).toEqual(t.OK);
   });
});
