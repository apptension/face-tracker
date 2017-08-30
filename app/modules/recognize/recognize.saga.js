import { takeLatest } from 'redux-saga/effects';
import { RecognizeTypes } from './recognize.contants';

import { recognize } from '../../services/kairos';

function * recognizePerson({ image }) {
  try {
    yield recognize({ image });
  } catch (error) {
    console.error(error);
  }
}

export function* watchRecognize() {
  try {
    yield takeLatest(RecognizeTypes.REQUEST_RECOGNITION, recognizePerson);
  } catch (error) {
    console.error(error);
  }
}
