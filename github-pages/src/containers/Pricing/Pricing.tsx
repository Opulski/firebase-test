import { Accordion } from "../../components";
import { useContext } from "react";
import { AuthContext } from "../../App";

function Pricing() {
  const token = useContext(AuthContext);
  return (
    <>
      <div>Authenticated as {token}</div>
      <div>
        <Accordion />
      </div>
    </>
  );
}

export default Pricing;
