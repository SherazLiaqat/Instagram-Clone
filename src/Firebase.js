import firebase from "firebase";
const firebaseApp=firebase.initializeApp ( {
    apiKey: "AIzaSyBkZ7CYxodF4_8YvzfFI2Cqav0kcgcio2Q",
    authDomain: "instagram-clone-react-clone.firebaseapp.com",
    projectId: "instagram-clone-react-clone",
    storageBucket: "instagram-clone-react-clone.appspot.com",
    messagingSenderId: "124405352225",
    appId: "1:124405352225:web:e1866ea6888baa6bd7a060",
    measurementId: "G-FN2ZV1V9YP"
  });
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();
  export{db,auth,storage};