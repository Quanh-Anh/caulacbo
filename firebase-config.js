const firebaseConfig = {

    apiKey: "AIzaSyAPj0igV2UO9pWYMi5c09FonFvzekUlFOE",

    authDomain: "clb-123.firebaseapp.com",

    projectId: "clb-123",

    storageBucket: "clb-123.firebasestorage.app",

    messagingSenderId: "468409034202",

    appId: "1:468409034202:web:c81af61871b8094ebc0ce3"

  };

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
