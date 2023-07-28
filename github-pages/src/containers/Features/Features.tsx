import React from "react";
import { Card } from "../../components";
import { MDBRow, MDBCol, MDBCardGroup } from "mdb-react-ui-kit";

export default function Features() {
  return (
    <>
      <MDBRow className="row-cols-2 row-cols-md-4 g-4">
        <MDBCol>
          <Card imageURL="https://picsum.photos/200" />
        </MDBCol>
        <MDBCol>
          <Card imageURL="https://picsum.photos/201" />
        </MDBCol>
        <MDBCol>
          <Card imageURL="https://picsum.photos/202" />
        </MDBCol>
        <MDBCol>
          <Card imageURL="https://picsum.photos/203" />
        </MDBCol>
      </MDBRow>
      <hr className="hr" />
      <MDBRow className="row-cols-2 row-cols-md-4 g-4">
        <MDBCol>
          <Card imageURL="https://picsum.photos/200" />
        </MDBCol>
        <MDBCol>
          <Card imageURL="https://picsum.photos/201" />
        </MDBCol>
        <MDBCol>
          <Card imageURL="https://picsum.photos/202" />
        </MDBCol>
        <MDBCol>
          <Card imageURL="https://picsum.photos/203" />
        </MDBCol>
      </MDBRow>
      <hr className="hr" />
    </>
  );
}
