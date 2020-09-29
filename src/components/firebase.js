 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDKukObceHOcAuaZnWmC9aK1pluO85hVmw",
    authDomain: "tutoa-devices.firebaseapp.com",
    databaseURL: "https://tutoa-devices.firebaseio.com",
    projectId: "tutoa-devices",
    storageBucket: "tutoa-devices.appspot.com",
    messagingSenderId: "547562368332",
    appId: "1:547562368332:web:d817d3e355137a1c0833e9",
    measurementId: "G-GDBHW4BZCX"
  };
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();