import firebase from 'firebase';

// Initialize Firebase
  const config = {
    apiKey: "AIzaSyDqHZgjzStvHHkBB9Ie3c0eDWc7Moxdnc4",
    authDomain: "fun-food-friends-8eab8.firebaseapp.com",
    databaseURL: "https://fun-food-friends-8eab8.firebaseio.com",
    projectId: "fun-food-friends-8eab8",
    storageBucket: "fun-food-friends-8eab8.appspot.com",
    messagingSenderId: "984357937799"
  };

  firebase.initializeApp(config);

  export default firebase;