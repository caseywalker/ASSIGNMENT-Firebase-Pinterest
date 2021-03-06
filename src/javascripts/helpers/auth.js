import firebase from 'firebase/app';
import 'firebase/auth';
import guestApp from '../views/guestApp';
import startApp from '../views/startApp';
import firebaseConfig from './apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp(user);
    } else {
      // person is NOT logged in
      guestApp();
    }
  });
};

export default checkLoginStatus;
