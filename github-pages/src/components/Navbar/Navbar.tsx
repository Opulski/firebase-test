import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
} from "mdb-react-ui-kit";
import SignInButton from "../SignInButton/SignInButton";
import SignOutButton from "../SignOut/SignOutButton";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "learnreact-8690d.firebaseapp.com",
  projectId: "learnreact-8690d",
  storageBucket: "learnreact-8690d.appspot.com",
  messagingSenderId: "626756468362",
  appId: "1:626756468362:web:0862dcc169d9c068237773",
  measurementId: "G-0JFMXP9Z0M",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

const signInOnClick = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

const signOutOnClick = () =>
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });

const Menu = () => (
  <>
    <MDBNavbarItem>
      <MDBNavbarLink active aria-current="page" href="/">
        Home
      </MDBNavbarLink>
    </MDBNavbarItem>
    <MDBNavbarItem>
      <MDBNavbarLink href="/">Features</MDBNavbarLink>
    </MDBNavbarItem>

    <MDBNavbarItem>
      <MDBNavbarLink href="/">Pricing</MDBNavbarLink>
    </MDBNavbarItem>
  </>
);

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        const displayName = user?.displayName;
        setLoggedIn(true);
        // ...
        console.log("uid", uid);
        console.log("displayName", user.displayName);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
        setLoggedIn(false);
      }
    });
  }, []);
  return (
    <MDBNavbar expand="lg" light bgColor="light" className="sticky-top">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/Layout">Ludwig</MDBNavbarBrand>

        <MDBNavbarNav>
          <Menu></Menu>
        </MDBNavbarNav>
        {loggedIn || <SignInButton text="SignUp" onClick={signInOnClick} />}
      </MDBContainer>
      {loggedIn || (
        <MDBBtn color="primary" onClick={signInOnClick}>
          SignIn
        </MDBBtn>
      )}
      {loggedIn && <SignOutButton onClick={signOutOnClick} />}
    </MDBNavbar>
  );
}
