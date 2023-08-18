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

import { NavLink } from "react-router-dom";
import { initializeApp } from "firebase/app";
import getFirebaseConfig from "../../firebase/Firebase-Config";
import { AuthContext } from "../../App";
import { useContext } from "react";

// Initialize Firebase
export const app = initializeApp(getFirebaseConfig());

const Menu = () => (
  <>
    <MDBNavbarItem>
      <MDBNavbarLink active aria-current="page">
        <NavLink to={"/"}>Home</NavLink>
      </MDBNavbarLink>
    </MDBNavbarItem>
    <MDBNavbarItem>
      <MDBNavbarLink>
        <NavLink to={"/features"}>Features</NavLink>
      </MDBNavbarLink>
    </MDBNavbarItem>

    <MDBNavbarItem>
      <MDBNavbarLink>
        <NavLink to={"/Pricing"}>Pricing</NavLink>
      </MDBNavbarLink>
    </MDBNavbarItem>
  </>
);

interface Props {
  onLogin: () => Promise<void>;
  onLogout: () => Promise<void>;
}

export default function Navbar({ onLogin, onLogout }: Props) {
  const token = useContext(AuthContext);

  return (
    <MDBNavbar expand="lg" light bgColor="light" className="sticky-top">
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <NavLink to={"/home"}>Ludwig</NavLink>
        </MDBNavbarBrand>

        <MDBNavbarNav>
          <Menu></Menu>
        </MDBNavbarNav>
        {token != null || <SignInButton text="SignUp" onClick={onLogin} />}
      </MDBContainer>
      {token != null || (
        <MDBBtn color="primary" onClick={onLogin}>
          SignIn
        </MDBBtn>
      )}
      {token != null && <SignOutButton onClick={onLogout} />}
    </MDBNavbar>
  );
}
