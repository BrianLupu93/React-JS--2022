import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCfds-3vmAwf5iQl5mKjv1EPsWodWWlYuk',
	authDomain: 'crwn-clothing-db-c7751.firebaseapp.com',
	projectId: 'crwn-clothing-db-c7751',
	storageBucket: 'crwn-clothing-db-c7751.appspot.com',
	messagingSenderId: '246088599627',
	appId: '1:246088599627:web:61904675491aba94a325ce'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
