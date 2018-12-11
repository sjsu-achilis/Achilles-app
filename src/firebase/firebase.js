import firebase from 'firebase';

var config = {

    databaseURL: "https://cmpe295-achilis.firebaseio.com",

};
firebase.initializeApp(config);

export const database = firebase.database();









