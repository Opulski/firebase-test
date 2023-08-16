// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCo3cAPkKsLeGXwA5ykcXkBW5Jx9mCQsik", //import.meta.env.VITE_API_KEY,
  authDomain: "learnreact-8690d.firebaseapp.com",
  projectId: "learnreact-8690d",
  storageBucket: "learnreact-8690d.appspot.com",
  messagingSenderId: "626756468362",
  appId: "1:626756468362:web:0862dcc169d9c068237773",
  measurementId: "G-0JFMXP9Z0M",
};

export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.ts"
    );
  } else {
    return firebaseConfig;
  }
}

export default getFirebaseConfig;
