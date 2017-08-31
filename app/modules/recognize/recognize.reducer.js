import { Record } from 'immutable';
import { createReducer } from 'reduxsauce';

import { RecognizeTypes } from './recognize.contants';

const RecognizeRecord = new Record({
  currentUser: null,
  errors: null,
});

const INITIAL_STATE = new RecognizeRecord({});

const success = (state, { user }) => state
  .set('currentUser', user);

const failure = (state, { errors }) => state
  .set('errors', errors);

const request = (state) => state
  .set('errors', null);

const reset = () => INITIAL_STATE;

export const reducer = createReducer(INITIAL_STATE, {
  [RecognizeTypes.REQUEST_RECOGNITION]: request,
  [RecognizeTypes.SUCCESS_RECOGNITION]: success,
  [RecognizeTypes.FAILURE_RECOGNITION]: failure,
  [RecognizeTypes.RESET_USER]: reset,
});
