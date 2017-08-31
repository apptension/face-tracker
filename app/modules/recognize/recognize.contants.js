import { createActions } from 'reduxsauce';

export const {
  Types: RecognizeTypes,
  Creators: RecognizeActions,
} = createActions({
  requestRecognition: ['image'],
  successRecognition: ['user'],
  failureRecognition: ['errors'],
  resetUser: [],
}, { prefix: 'RECOGNIZE/' });
