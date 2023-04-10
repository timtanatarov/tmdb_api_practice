import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC1r9WH0-9bMU6rEpnU9Ic6jwgNHgGfPm0",
    authDomain: "tmdb-api-practice.firebaseapp.com",
    projectId: "tmdb-api-practice",
    storageBucket: "tmdb-api-practice.appspot.com",
    messagingSenderId: "645307854576",
    appId: "1:645307854576:web:14419d15dd74a9a5959c35"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();