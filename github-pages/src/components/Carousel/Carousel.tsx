import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="https://picsum.photos/987/434"
        alt="..."
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="https://picsum.photos/987/435" //987 / 435
        alt="..."
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="https://picsum.photos/987/436"
        alt="..."
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
