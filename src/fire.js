import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyACzb-wbcGRYLQyzEDU7MkJWOoH5sBkfIU",
    authDomain: "chris-capstone.firebaseapp.com",
    databaseURL: "https://chris-capstone.firebaseio.com",
    projectId: "chris-capstone",
    storageBucket: "chris-capstone.appspot.com",
    messagingSenderId: "109556546668"
};
var fire = firebase.initializeApp(config);

export default fire