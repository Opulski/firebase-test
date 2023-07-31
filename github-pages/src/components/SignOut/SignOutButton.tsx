import { MDBBtn } from "mdb-react-ui-kit";

interface Props {
  onClick: () => void;
}

const SignOutButton = ({ onClick }: Props) => {
  return (
    <div>
      <MDBBtn color="secondary" onClick={onClick}>
        SignOut
      </MDBBtn>
    </div>
  );
};

export default SignOutButton;
