// Configuration Firebase
// IMPORTANT: Remplacez ces valeurs par celles de votre projet Firebase
// Vous trouverez ces informations dans Firebase Console > Project Settings > Your apps

const firebaseConfig = {
    apiKey: "AIzaSyBQtufatQ-3mLMuyuxVkpCV4xeNJpcpN9c",
    authDomain: "webduo-73549.firebaseapp.com",
    projectId: "webduo-73549",
    storageBucket: "webduo-73549.firebasestorage.app",
    messagingSenderId: "786320856992",
    appId: "1:786320856992:web:b56c6beb2e825b40af36c5",
    measurementId: "G-WZ3PDF8CN0"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

// Initialiser les services Firebase
const auth = firebase.auth();
const db = firebase.firestore();

console.log('🔥 Firebase initialized successfully!');
