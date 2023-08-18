import { Carousel } from "../../components";
import Features from "../Features/Features";
import { AuthContext } from "../../App";
import Layout from "../Layout/Layout";
import { useContext } from "react";

interface Props {
  onLogin: () => void;
}

const Home = ({ onLogin }: Props) => {
  const token = useContext(AuthContext);
  return (
    <>
      <button type="button" onClick={onLogin}>
        Sign In
      </button>
      <div>Authenticated as {token}</div>
      <div>
        <Carousel />
        <Features />
        <Layout />
      </div>
    </>
  );
};

export default Home;
