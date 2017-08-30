import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form';

import { reducer as routerReducer } from './router/router.redux';

export default function createReducer() {
  return combineReducers({
    route: routerReducer,
    form: formReducer,
  });
}
