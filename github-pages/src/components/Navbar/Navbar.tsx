import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";

const Menu = () => (
  <>
    <MDBNavbarItem>
      <MDBNavbarLink active aria-current="page" href="/">
        Home
      </MDBNavbarLink>
    </MDBNavbarItem>
    <MDBNavbarItem>
      <MDBNavbarLink href="/Features">Features</MDBNavbarLink>
    </MDBNavbarItem>

    <MDBNavbarItem>
      <MDBNavbarLink href="/Pricing">Pricing</MDBNavbarLink>
    </MDBNavbarItem>
  </>
);

export default function Navbar() {
  return (
    <MDBNavbar expand="lg" light bgColor="light" className="sticky-top">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/Layout">Ludwig</MDBNavbarBrand>

        <MDBNavbarNav>
          <Menu></Menu>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}
