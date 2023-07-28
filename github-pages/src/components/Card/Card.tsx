import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

interface Props {
  imageURL: string;
}

export default function App({ imageURL }: Props) {
  return (
    <MDBCard>
      <MDBCardImage
        position="top"
        alt="..."
        src={
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        }
      />
      <MDBCardBody>
        <MDBCardTitle>Test</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
      <MDBCardBody></MDBCardBody>
      <MDBBtn href="#">Go somewhere</MDBBtn>
    </MDBCard>
  );
}
