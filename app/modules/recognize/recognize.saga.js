import { takeLatest } from 'redux-saga/effects';
import moment from 'moment';

import { RecognizeTypes } from './recognize.contants';
import { recognize } from '../../services/kairos';
import { workingHoursRef, usersRef } from '../utils/refs';

const DATE_FORMAT = 'YYYY-MM-DD';

function* getUser(userId) {
  try {
    return (yield usersRef.child(userId).once('value')).val();
  } catch (error) {
    console.error(error);
  }

  return null;
}

function* saveWorkingHours(userId) {
  try {
    const now = moment();
    const userTimeRef = workingHoursRef.child(now.format(DATE_FORMAT)).child(userId);

    const { startTime } = (yield userTimeRef.once('value')).val();

    if (!startTime) {
      yield userTimeRef.child('startTime').set(now.unix());
    }

    yield userTimeRef.child('endTime').set(now.unix());
  } catch (error) {
    console.error(error);
  }
}

function* updateTime({ transaction: { subject_id: userId } }) {
  try {
    const user = yield getUser(userId);

    if (!user) {
      throw new Error('No user in database');
    }

    yield saveWorkingHours(userId);
  } catch (error) {
    console.error(error);
  }
}

function* recognizePerson({ image }) {
  try {
    const { images, Errors } = yield recognize({ image });

    if (Errors) {
      console.error(Errors);
      return;
    }

    yield images.map(updateTime);
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
