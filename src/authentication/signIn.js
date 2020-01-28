import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const signIn = document.querySelector('.sign-in');

const firebaseConfig = {
  apiKey: 'AIzaSyCIbbABTgvBdbiJDyuVGjwnYCDZujj9KHo',
  authDomain: 'piskel-clone-47e97.firebaseapp.com',
  databaseURL: 'https://piskel-clone-47e97.firebaseio.com',
  projectId: 'piskel-clone-47e97',
  storageBucket: 'piskel-clone-47e97.appspot.com',
  messagingSenderId: '165791542356',
  appId: '1:165791542356:web:2fa301e7e1d53037c8d1c1',
  measurementId: 'G-3SLE7LSYTE',
};

firebase.initializeApp(firebaseConfig);

export function signWithGoogle() {
  signIn.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  });
}
