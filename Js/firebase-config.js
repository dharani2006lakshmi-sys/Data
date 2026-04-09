const firebaseConfig = {
  apiKey: "AIzaSyAWY0l0iJr2Pzk0TFLy2IQjD-y4i6gT5d8",
  authDomain: "data-fc399.firebaseapp.com",
  projectId: "data-fc399",
  storageBucket: "data-fc399.firebasestorage.app",
  messagingSenderId: "239642224017",
  appId: "1:239642224017:web:0cdd526c82abad4812e630"
};

firebase.initializeApp(firebaseConfig);
const auth    = firebase.auth();
const db      = firebase.firestore();
const storage = firebase.storage();
