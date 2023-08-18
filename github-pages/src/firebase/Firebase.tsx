import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "./Firebase-Config";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithRedirect,
  getRedirectResult,
  NextOrObserver,
  User,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();

const app = initializeApp(getFirebaseConfig());
const auth = getAuth(app);

const signInUser = async (
  provider:
    | GithubAuthProvider
    | TwitterAuthProvider
    | FacebookAuthProvider
    | GoogleAuthProvider
) => {
  return signInWithRedirect(auth, provider);
};

export const SignInUserWithGoogle = () => {
  signInUser(googleProvider);
  return auth;
};
export const SignInUserWithFacebook = async () => {
  signInUser(facebookProvider);
  return auth;
};
export const SignInUserWithGithub = async () => {
  signInUser(githubProvider);
  return getRedirectResult(auth)
    .then((result) => {
      // const credential = result
      //   ? GithubAuthProvider.credentialFromResult(result)
      //   : null;

      // The signed-in user info.
      return result?.user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      return errorCode;
      // ...
    });
};
export const SignInUserWithTwitter = async () => {
  signInUser(twitterProvider);
  return getRedirectResult(auth)
    .then((result) => {
      const credential = result
        ? TwitterAuthProvider.credentialFromResult(result)
        : null;

      // The signed-in user info.
      return result?.user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      return errorCode;
      // ...
    });
};

export const userStateListener = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback);
};

export const SignOutUser = async () => await signOut(auth);
