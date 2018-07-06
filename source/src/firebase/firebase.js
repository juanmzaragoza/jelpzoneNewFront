import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyC7OLlZmHNPAhOUdml6cnZVEyD_sFlluSY',
    authDomain: 'jelpzone-1514091504163.firebaseapp.com',
    databaseURL: 'https://jelpzone-1514091504163.firebaseio.com',
    projectId: 'jelpzone-1514091504163',
    storageBucket: 'jelpzone-1514091504163.appspot.com',
    messagingSenderId: '41945100752'
};

firebase.initializeApp(config);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();
export {
    auth,
    database,
    googleAuthProvider,
    githubAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider
};