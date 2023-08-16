import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./Auth-Context";
import { useContext } from "react";
import { Home } from "./containers";
import "./App.css";
import Profile from "./containers/Profile/Profile";
import { Pricing, Login } from "./containers";

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="profile" element={currentUser ? <Profile /> : <Home />} />
        <Route path="Pricing" element={currentUser ? <Pricing /> : <Login />} />
      </Routes>
    </>
  );
}

export default App;
