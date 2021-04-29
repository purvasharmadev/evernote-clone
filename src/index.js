import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAmQnh93uZq1NLivJJG0YHDzHB4gcFWaDQ",
  authDomain: "evenote-clone-c55b5.firebaseapp.com",
  projectId: "evenote-clone-c55b5",
  storageBucket: "evenote-clone-c55b5.appspot.com",
  messagingSenderId: "358017618837",
  appId: "1:358017618837:web:2e0efb222ba1c71c0f5c9c"
});

const rootElement = document.getElementById("evernote-container");
ReactDOM.render(<App />, rootElement);
