import { all, fork } from 'redux-saga/effects';

import { watchRecognize } from './recognize/recognize.saga';

export default function* rootSaga() {
  yield all([
    fork(watchRecognize),
  ]);
}
