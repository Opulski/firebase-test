import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  NextOrObserver,
  GoogleAuthProvider,
  User,
} from "firebase/auth";
import { getFirebaseConfig } from "./Firebase-Config";

const app = initializeApp(getFirebaseConfig());
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInUser = async () => {
  return await signInWithPopup(auth, provider);
  // .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   // const credential = GoogleAuthProvider.credentialFromResult(result);
  //   // const token = credential?.accessToken;
  //   // The signed-in user info.
  //   // const user = result.user;
  //   // IdP data available using getAdditionalUserInfo(result)
  //   // ...
  //   console.log(result);
  // })
  // .catch((error) => {
  //   // Handle Errors here.
  //   // const errorCode = error.code;
  //   // const errorMessage = error.message;
  //   // The email of the user's account used.
  //   // const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   // const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  //   console.log(error);
  // });
};

export const userStateListener = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback);
};

export const SignOutUser = async () => await signOut(auth);
