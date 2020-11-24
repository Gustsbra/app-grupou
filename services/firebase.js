import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDmrHsc9lUPuCj25wXedanJG3dChY_PO8c",
    authDomain: "app-grupou.firebaseapp.com",
    databaseURL: "https://app-grupou.firebaseio.com",
    projectId: "app-grupou",
    storageBucket: "app-grupou.appspot.com",
    messagingSenderId: "453661406386",
    appId: "1:453661406386:web:11b02da9f98701c64f85ab"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
