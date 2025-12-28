// Configuration Firebase
// IMPORTANT: Remplacez ces valeurs par celles de votre projet Firebase
// Vous trouverez ces informations dans Firebase Console > Project Settings > Your apps

const firebaseConfig = {
    apiKey: "AIzaSyD9sLYMmMmYhHvkw3GP4NYWvd7GgSbB_xc",
    authDomain: "espace-clients-b83eb.firebaseapp.com",
    projectId: "espace-clients-b83eb",
    storageBucket: "espace-clients-b83eb.firebasestorage.app",
    messagingSenderId: "910256118004",
    appId: "1:910256118004:web:2df218142ab709bbe726a1",
    measurementId: "G-HV77YD94X7"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

// Initialiser les services Firebase
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

console.log('🔥 Firebase initialized successfully!');
