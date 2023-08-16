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
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import getFirebaseConfig from "../../firebase/Firebase-Config";
import { signInUser, SignOutUser } from "../../firebase/Firebase";

// Initialize Firebase
export const app = initializeApp(getFirebaseConfig());

const auth = getAuth();

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
      <MDBNavbarLink href="/Pricing">Pricing</MDBNavbarLink>
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

  const navigate = useNavigate();
  const onClickSignIn = async () => {
    try {
      const userCredential = await signInUser();
      if (userCredential) {
        navigate("/profile");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <MDBNavbar expand="lg" light bgColor="light" className="sticky-top">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/Layout">Ludwig</MDBNavbarBrand>

        <MDBNavbarNav>
          <Menu></Menu>
        </MDBNavbarNav>
        {loggedIn || <SignInButton text="SignUp" onClick={onClickSignIn} />}
      </MDBContainer>
      {loggedIn || (
        <MDBBtn color="primary" onClick={onClickSignIn}>
          SignIn
        </MDBBtn>
      )}
      {loggedIn && <SignOutButton onClick={SignOutUser} />}
    </MDBNavbar>
  );
}
