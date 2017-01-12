import firebase from 'firebase';

try {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBoivg9ez0wwWj0lH0UWa_GDq9qpHl-UI4",
        authDomain: "garrett-todo-app.firebaseapp.com",
        databaseURL: "https://garrett-todo-app.firebaseio.com",
        storageBucket: "garrett-todo-app.appspot.com",
        messagingSenderId: "323810928037"
    };

    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseDB = firebase.database().ref();
export default firebase;
