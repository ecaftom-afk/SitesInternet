# Configuration Firebase pour les Espaces Clients

## Étape 1 : Créer un projet Firebase

1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Cliquez sur "Ajouter un projet" (Add project)
3. Donnez un nom à votre projet (ex: "web-locations-clients")
4. Désactivez Google Analytics si vous n'en avez pas besoin
5. Cliquez sur "Créer le projet"

## Étape 2 : Configurer l'application Web

1. Dans la console Firebase, cliquez sur l'icône "Web" (</>)
2. Donnez un nom à votre application (ex: "Espace Clients")
3. Cochez "Configurer Firebase Hosting" si vous voulez héberger sur Firebase
4. Cliquez sur "Enregistrer l'application"
5. **Copiez les informations de configuration qui s'affichent**

## Étape 3 : Ajouter la configuration à votre site

1. Ouvrez le fichier `js/firebase-config.js`
2. Remplacez les valeurs suivantes par celles de votre projet Firebase :
   - `apiKey`
   - `authDomain`
   - `projectId`
   - `storageBucket`
   - `messagingSenderId`
   - `appId`

Exemple :
```javascript
const firebaseConfig = {
    apiKey: "AIzaSyBxyz123...",
    authDomain: "web-locations-clients.firebaseapp.com",
    projectId: "web-locations-clients",
    storageBucket: "web-locations-clients.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123..."
};
```

## Étape 4 : Activer l'authentification par email/mot de passe

1. Dans Firebase Console, allez dans **Authentication** (menu de gauche)
2. Cliquez sur **Get started**
3. Dans l'onglet **Sign-in method**, cliquez sur **Email/Password**
4. Activez **Email/Password** (le premier switch)
5. Cliquez sur **Enregistrer**

## Étape 5 : Configurer Firestore Database

1. Dans Firebase Console, allez dans **Firestore Database** (menu de gauche)
2. Cliquez sur **Créer une base de données**
3. Choisissez **Mode test** pour commencer (vous pourrez sécuriser plus tard)
4. Choisissez un emplacement (europe-west par exemple)
5. Cliquez sur **Activer**

### Règles de sécurité Firestore (à configurer)

Dans l'onglet **Règles**, remplacez le contenu par :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Les clients ne peuvent lire/modifier que leurs propres données
    match /clients/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Les admins peuvent tout lire (vous ajouterez la logique admin plus tard)
    match /{document=**} {
      allow read, write: if request.auth != null &&
        get(/databases/$(database)/documents/admins/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

## Étape 6 : Configurer Firebase Storage (pour les fichiers)

1. Dans Firebase Console, allez dans **Storage** (menu de gauche)
2. Cliquez sur **Commencer**
3. Choisissez **Mode test** pour commencer
4. Cliquez sur **Suivant** puis **Terminé**

### Règles de sécurité Storage (à configurer)

Dans l'onglet **Règles**, remplacez le contenu par :

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Les clients peuvent uploader dans leur propre dossier
    match /clients/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Étape 7 : Tester la connexion

1. Ouvrez le fichier `login.html` dans votre navigateur
2. Créez un compte de test avec l'onglet "Inscription"
3. Vérifiez dans Firebase Console > Authentication que l'utilisateur a bien été créé
4. Vérifiez dans Firestore Database que le document client a bien été créé

## Fichiers créés

- **`login.html`** : Page de connexion/inscription pour les clients
- **`js/firebase-config.js`** : Configuration Firebase (à personnaliser avec vos clés)

## Prochaines étapes

Maintenant que la page de connexion est créée, vous pourrez :

1. **Créer le tableau de bord client** (`dashboard.html`) avec :
   - Informations du projet
   - Statut de développement
   - Lien vers le site preview
   - Messagerie avec les développeurs
   - Bouton de validation/paiement

2. **Créer l'interface admin** pour :
   - Voir tous les clients
   - Gérer les projets
   - Modifier les statuts
   - Uploader les sites preview
   - Envoyer des messages

## Support

Si vous avez des questions sur la configuration Firebase, consultez :
- [Documentation Firebase](https://firebase.google.com/docs)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Cloud Firestore](https://firebase.google.com/docs/firestore)

## Sécurité importante

⚠️ **Ne committez JAMAIS votre fichier `firebase-config.js` avec les vraies clés dans un repository public !**

Les clés Firebase peuvent être exposées côté client (c'est normal), mais vous devez sécuriser l'accès avec les règles Firestore et Storage.
