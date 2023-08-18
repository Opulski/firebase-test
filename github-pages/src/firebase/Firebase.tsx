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
export const auth = getAuth(app);

const signInUser = async (
  provider:
    | GithubAuthProvider
    | TwitterAuthProvider
    | FacebookAuthProvider
    | GoogleAuthProvider
) => {
  return signInWithRedirect(auth, provider);
};

export const SignInUserWithGoogle = async () => {
  return signInUser(googleProvider);
};

export const SignInUserWithGithub = async () => {
  return signInUser(githubProvider);
};

export const SignInUserWithFacebook = async () => {
  signInUser(facebookProvider);
  const user = await getRedirectResult(auth);
  console.log("Fuck");
  return user?.user;
};

export const SignInUserWithTwitter = async () => {
  signInUser(twitterProvider);
  const user = await getRedirectResult(auth);
  console.log("Fuck");
  return user?.user;
};

export const userStateListener = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback);
};

export const SignOutUser = async () => await signOut(auth);
