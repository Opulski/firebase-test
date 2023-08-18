import { Navbar } from "./components";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "./Auth-Context";
import {
  SignInUserWithFacebook,
  SignInUserWithGithub,
  SignInUserWithGoogle,
  SignInUserWithTwitter,
  SignOutUser,
} from "./firebase/Firebase";
import {
  useContext,
  useState,
  createContext,
  ReactNode,
  useEffect,
} from "react";
import { Home, Features, Pricing, Login } from "./containers";
import "./App.css";
import Profile from "./containers/Profile/Profile";
import { getRedirectResult } from "firebase/auth";
import { auth } from "./firebase/Firebase";

export const AuthContext = createContext<null | string>(null);

const App = () => {
  const [token, setToken] = useState<null | string>(null);

  const fucking = async () => {
    await getRedirectResult(auth).then((user) => {
      console.log("Fuck");
      if (undefined != user) setToken(user?.user.refreshToken);
    });
  };

  useEffect(() => {
    fucking();
  });

  const handleLoginGoogle = async () => {
    SignInUserWithGoogle();
  };

  const handleLoginGithub = async () => {
    SignInUserWithGithub();
  };

  const handleLoginTwitter = async () => {
    await SignInUserWithTwitter().then((user) => {
      if (undefined != user) setToken(user?.refreshToken);
    });
  };

  const handleLoginFacebook = async () => {
    const user = await SignInUserWithFacebook();
    if (undefined != user) setToken(user?.refreshToken);
  };

  const handleLogout = async () => {
    await SignOutUser();
    setToken(null);
  };

  interface Props {
    children: ReactNode;
  }
  const ProtectedRoute = ({ children }: Props) => {
    const token = useContext(AuthContext);
    console.log("TOKEN IS NULL");
    const location = useLocation();

    if (token == null) {
      console.log("Fucking Fuck");
      return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return children;
  };
  // const { currentUser } = useContext(AuthContext);
  return (
    <>
      <AuthContext.Provider value={token}>
        <Navbar onLogin={handleLoginGoogle} onLogout={handleLogout} />
        <Routes>
          <Route index element={<Home onLogin={handleLoginGoogle} />} />
          <Route path="home" element={<Home onLogin={handleLoginGoogle} />} />
          <Route
            path="login"
            element={
              <Login
                handleLoginFacebook={handleLoginFacebook}
                handleLoginGithub={handleLoginGithub}
                handleLoginGoogle={handleLoginGoogle}
                handleLoginTwitter={handleLoginTwitter}
              />
            }
          />
          <Route path="profile" element={<Profile />} />
          <Route path="features" element={<Features />} />
          <Route
            path="protected"
            element={
              <ProtectedRoute>
                <Pricing />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContext.Provider>
    </>
  );
};

export default App;
