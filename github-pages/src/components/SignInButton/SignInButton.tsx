import { MDBBtn } from "mdb-react-ui-kit";

interface Props {
  onClick: () => void;
  text: string;
}

const SignInButton = ({ onClick, text }: Props) => {
  return (
    <div>
      <MDBBtn color="secondary" onClick={onClick}>
        {text}
      </MDBBtn>
    </div>
  );
};

export default SignInButton;
