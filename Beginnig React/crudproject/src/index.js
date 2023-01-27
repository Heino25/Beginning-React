import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBN9WlmRc3SedmC4agM1G-rYqezGR22iZE",
  authDomain: "crudproject-45834.firebase app.com",
  databaseURL: "https://crudproject-45834.firebaseio.com",
  projectId: "crudproject-45834", 
  storageBucket: "crudproject-45834.appspot.com",
  messagingSenderId: "590481645308",
  appId: "..."
};

firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
