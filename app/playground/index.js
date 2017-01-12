import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBoivg9ez0wwWj0lH0UWa_GDq9qpHl-UI4",
    authDomain: "garrett-todo-app.firebaseapp.com",
    databaseURL: "https://garrett-todo-app.firebaseio.com",
    storageBucket: "garrett-todo-app.appspot.com",
    messagingSenderId: "323810928037"
  };
  firebase.initializeApp(config);

  var db = firebase.database().ref();

  db.set({
      app: {
        name: 'My Todo App',
        version: '1.0'
      },
      isRunning: true,
      user: {
        name: 'Brooks',
        age: 30
      }
  });

  db.child('user').on('value', (snapshot) => {
    console.log('Clap', snapshot.val());
  });

  db.update({
    isRunning: false
  });

  db.update({
    user: {
      name: 'Bill'
    }
  });