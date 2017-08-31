import { Record } from 'immutable';
import { createReducer } from 'reduxsauce';
import { LOCATION_CHANGE } from 'react-router-redux';


const RouterRecord = new Record({
  locationBeforeTransitions: null,
});

const INITIAL_STATE = new RouterRecord();

export const locationChangeHandler = (state, action) => state
  .set('locationBeforeTransitions', action.payload);

export const reducer = createReducer(INITIAL_STATE, {
  [LOCATION_CHANGE]: locationChangeHandler,
});
