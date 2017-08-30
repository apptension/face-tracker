import { createActions } from 'reduxsauce';

export const {
  Types: RecognizeTypes,
  Creators: RecognizeActions,
} = createActions({
  requestRecognition: ['image'],
}, { prefix: 'RECOGNIZE/' });
