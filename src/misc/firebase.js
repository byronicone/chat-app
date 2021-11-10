import { Notification as Toast } from 'rsuite';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/messaging';
import 'firebase/storage';
import 'firebase/functions';
import { isLocalhost } from './helpers';

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
export const storage = app.storage();
export const functions = app.functions('us-east1');

export const fcmVapidKey = process.env.CLOUD_MESSAGING_KEY;
export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.onMessage(({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  functions.useEmulator('localhost', 5001);
}
