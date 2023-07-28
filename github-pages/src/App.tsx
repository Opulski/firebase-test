import { Navbar } from "./components";
import { Features, Home, Layout, Pricing } from "./containers";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Layout" Component={Layout} />
        <Route path="/Features" Component={Features} />
        <Route path="/Pricing" Component={Pricing} />
      </Routes>
    </Router>
  );
}

export default App;
