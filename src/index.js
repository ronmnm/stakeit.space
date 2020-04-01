import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from "firebase/app";
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyC5TnSm2lU5d2TiG-KR6_KXfiULvITIn5U",
  authDomain: "stakeit-45d38.firebaseapp.com",
  databaseURL: "https://stakeit-45d38.firebaseio.com",
  projectId: "stakeit-45d38",
  storageBucket: "stakeit-45d38.appspot.com",
  messagingSenderId: "992354349579",
  appId: "1:992354349579:web:a53b4c3dd0eb7b984e4d0e",
  measurementId: "G-3WR8LEXVX2"
};
firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('root'));

