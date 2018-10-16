import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyC6A10rj-Yad4n9lq_WbwxOwxPoGeEDB34",
    authDomain: "online-fir.firebaseapp.com",
    databaseURL: "https://online-fir.firebaseio.com",
    projectId: "online-fir",
    storageBucket: "",
    messagingSenderId: "243791258704"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
