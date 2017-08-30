import { createSelector } from 'reselect';

const selectRecognize = state => state.get('recognize');

export const selectUser = createSelector(
  selectRecognize,
  state => state.get('currentUser')
);

export const selectErrors = createSelector(
  selectRecognize,
  state => state.get('errors')
);
