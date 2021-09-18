import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const Config = {
  apiKey: "AIzaSyA4og_FhHXokjLjCHxtjj0ZADrGhnCgKxM",
  authDomain: "dayries-b27ed.firebaseapp.com",
  projectId: "dayries-b27ed",
  storageBucket: "dayries-b27ed.appspot.com",
  messagingSenderId: "190479585327",
  appId: "1:190479585327:web:144cb83acd07faaef8f6da",
  measurementId: "G-1MLVDJP2FY"
};

export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;
    const userRef = await firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    if(!snapShot.exists)
    {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          id : userAuth.uid,
          ...additionalData
        })
      }
      catch(err){
        console.log("error")
      }
    }
    return userRef;
  }


if (!firebase.apps.length) {
   firebase.initializeApp(Config);
}else {
   firebase.app(); // if already initialized, use that one
}

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider); // function

  export default firebase;