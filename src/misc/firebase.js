import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDjI9Ps7bF5xlOzm5pSuvmq911V6zsCAHc',
  authDomain: 'chat-web-app-ab9f9.firebaseapp.com',
  projectId: 'chat-web-app-ab9f9',
  storageBucket: 'chat-web-app-ab9f9.appspot.com',
  messagingSenderId: '133018801781',
  appId: '1:133018801781:web:9c6b451484630faf9f4a3c',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();