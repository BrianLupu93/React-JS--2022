import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCfds-3vmAwf5iQl5mKjv1EPsWodWWlYuk',
	authDomain: 'crwn-clothing-db-c7751.firebaseapp.com',
	projectId: 'crwn-clothing-db-c7751',
	storageBucket: 'crwn-clothing-db-c7751.appspot.com',
	messagingSenderId: '246088599627',
	appId: '1:246088599627:web:61904675491aba94a325ce'
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, { displayName, email, createdAt });
		} catch (error) {
			console.log('error creating the user', error.message);
		}
	}

	return userDocRef;

	//  if user data does not exist
	// create / set the document with the data from userAuth in my collection

	// if user data exist
	// return userDocRef
};
