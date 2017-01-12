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

  var todosRef = db.child('todos');

  todosRef.on('child_added', (snapshot) => {
    console.log('New todo', snapshot.key, snapshot.value);
  });

  var keyA = todosRef.push().key;
  var keyB = todosRef.push().key;
  console.log(keyA, keyB);

  var todoA = {text: 'Walk the dog'};
  var todoB = {text: 'Play a game'};

  var updates = {};
    updates[keyA] = todoA;
    updates[keyB] = todoB;


  todosRef.update(updates);
