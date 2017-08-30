import firebase from 'firebase';
import config from 'env-config';

// initalize Firebase
firebase.initializeApp(config.firebase);
firebase.auth().signInAnonymously();

if (config.firebaseEnableLogging) {
  firebase.database.enableLogging((msg) => console.log('[FIREBASE]', msg)); //eslint-disable-line
}

export const workingHoursRef = firebase.database().ref('workingHours');
export const usersRef = firebase.database().ref('users');
