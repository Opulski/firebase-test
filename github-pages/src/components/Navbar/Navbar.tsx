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
        <NavLink to={"/protected"}>Protected Route</NavLink>
      </MDBNavbarLink>
    </MDBNavbarItem>
  </>
);

interface Props {
  onLogin: () => void;
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
        <MDBBtn color="primary">
          <NavLink
            to={"/login"}
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "bold",
                color: isPending ? "white" : "white",
              };
            }}
          >
            SignIn
          </NavLink>
        </MDBBtn>
      )}
      {token != null && <SignOutButton onClick={onLogout} />}
    </MDBNavbar>
  );
}
