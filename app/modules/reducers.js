import { combineReducers } from 'redux-immutable';

import { reducer as routerReducer } from './router/router.redux';
import { reducer as recognizeReducer } from './recognize/recognize.reducer';

export default function createReducer() {
  return combineReducers({
    route: routerReducer,
    recognize: recognizeReducer,
  });
}
