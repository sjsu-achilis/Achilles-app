import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBPTuZqrfvrg6SGRKq4G_Ho5NYhPd4NG3M",
    authDomain: "fir-react-693b0.firebaseapp.com",
    databaseURL: "https://fir-react-693b0.firebaseio.com",
    projectId: "fir-react-693b0",
    storageBucket: "fir-react-693b0.appspot.com",
    messagingSenderId: "85101411092"
};
firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const messaging = firebase.messaging();







