import { MDBBadge } from "mdb-react-ui-kit";

export default function App() {
  return (
    <>
      <div className="row gx-lg-5">
        <div className="col-lg-6 mb-5">
          <div className="d-flex align-items-start">
            <div className="flex-shrink-0">
              <MDBBadge light="true" className="p-3 badge-primary rounded-4">
                <i className="fas fa-cloud-upload-alt fa-lg text-primary fa-fw"></i>
              </MDBBadge>
            </div>
            <div className="flex-grow-1 ms-4">
              <p className="fw-bold mb-1">Tutorials</p>
              <p className="text-muted mb-1">
                Dozens of free tutorials to help you discover the full potential
                of MDB.
              </p>
              <small>
                <a href="">Learn more</a>
              </small>
            </div>
            <div className="vr" style={{ height: "100px" }}></div>
          </div>
        </div>

        <div className="col-lg-6 mb-5">
          <div className="d-flex align-items-start">
            <div className="flex-shrink-0">
              <MDBBadge light="true" className="p-3 badge-primary rounded-4">
                <i className="fas fa-database fa-lg text-primary fa-fw"></i>
              </MDBBadge>
            </div>
            <div className="flex-grow-1 ms-4">
              <p className="fw-bold mb-1">Integrations</p>
              <p className="text-muted mb-1">
                MDB is integrated with all major technologies and tools.
              </p>
              <small>
                <a href="">Learn more</a>
              </small>
            </div>
          </div>
        </div>
        <hr className="hr" />

        <div className="col-lg-6 mb-5">
          <div className="d-flex align-items-start">
            <div className="flex-shrink-0">
              <MDBBadge light="true" className="p-3 badge-primary rounded-4">
                <i className="fas fa-stream fa-lg text-primary fa-fw"></i>
              </MDBBadge>
            </div>
            <div className="flex-grow-1 ms-4">
              <p className="fw-bold mb-1">Backend friendly</p>
              <p className="text-muted mb-1">
                MDB is designed to be seamlessly integrated and used with the
                backend.
              </p>
              <small>
                <a href="">Learn more</a>
              </small>
            </div>
            <div className="vr" style={{ height: "100px" }}></div>
          </div>
        </div>

        <div className="col-lg-6 mb-5">
          <div className="d-flex align-items-start">
            <div className="flex-shrink-0">
              <MDBBadge light="true" className="p-3 badge-primary rounded-4">
                <i className="fas fa-copy fa-lg text-primary fa-fw"></i>
              </MDBBadge>
            </div>
            <div className="flex-grow-1 ms-4">
              <p className="fw-bold mb-1">Support and community</p>
              <p className="text-muted mb-1">
                The MDB team and our global community are there to support you.
              </p>
              <small>
                <a href="">Learn more</a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
