// Configuration Firebase
// IMPORTANT: Remplacez ces valeurs par celles de votre projet Firebase
// Vous trouverez ces informations dans Firebase Console > Project Settings > Your apps

const firebaseConfig = {
    apiKey: "VOTRE_API_KEY",
    authDomain: "VOTRE_PROJECT_ID.firebaseapp.com",
    projectId: "VOTRE_PROJECT_ID",
    storageBucket: "VOTRE_PROJECT_ID.appspot.com",
    messagingSenderId: "VOTRE_MESSAGING_SENDER_ID",
    appId: "VOTRE_APP_ID"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

// Initialiser les services Firebase
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

console.log('🔥 Firebase initialized successfully!');
