
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJAglqTW80djVBJWyQgNETCnwGYbsRdyA",
  authDomain: "real-estate-listing-7cd61.firebaseapp.com",
  databaseURL: "https://real-estate-listing-7cd61.firebaseio.com",
  projectId: "real-estate-listing-7cd61",
  storageBucket: "real-estate-listing-7cd61.appspot.com",
  messagingSenderId: "584809329141",
  appId: "1:584809329141:web:e250eb9b62895196"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();
