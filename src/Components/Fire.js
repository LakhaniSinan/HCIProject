import firebase from 'firebase';

const config=({
    apiKey: "AIzaSyCsnj--PUUctvLNqu0W6tSEFXcosohR1YA",
    authDomain: "hciproject-e30ab.firebaseapp.com",
    databaseURL: "https://hciproject-e30ab.firebaseio.com",
    projectId: "hciproject-e30ab",
    storageBucket: "hciproject-e30ab.appspot.com",
    messagingSenderId: "887532305438",
    appId: "1:887532305438:web:740203a512e6cce4ed420f",
    measurementId: "G-SBPP9Z5L3X"
   });
  const Fire = firebase.initializeApp(config)

  export default Fire