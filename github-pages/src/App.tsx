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
import { useContext, useState, createContext, ReactNode } from "react";
import { Home, Features, Pricing, Login } from "./containers";
import "./App.css";
import Profile from "./containers/Profile/Profile";
import { getRedirectResult } from "firebase/auth";

export const AuthContext = createContext<null | string>(null);

const App = () => {
  const [token, setToken] = useState<null | string>(null);

  const handleLoginGoogle = async () => {
    const auth = SignInUserWithGoogle();
    const user = await getRedirectResult(auth).then((result) => {
      // const credential = result
      //   ? GoogleAuthProvider.credentialFromResult(result)
      //   : null;

      // The signed-in user info.
      return result?.user;
    });
    if (user != undefined) setToken(user?.refreshToken);
  };

  const handleLoginTwitter = async () => {
    const auth = await SignInUserWithTwitter();
    const user = await getRedirectResult(auth).then((result) => {
      // const credential = result
      //   ? GoogleAuthProvider.credentialFromResult(result)
      //   : null;

      // The signed-in user info.
      return result?.user;
    });
    if (user != undefined) setToken(user?.refreshToken);
  };

  const handleLoginGithub = async () => {
    const auth = await SignInUserWithGithub();
    const user = await getRedirectResult(auth).then((result) => {
      // const credential = result
      //   ? GoogleAuthProvider.credentialFromResult(result)
      //   : null;

      // The signed-in user info.
      return result?.user;
    });
    if (user != undefined) setToken(user?.refreshToken);
  };

  const handleLoginFacebook = async () => {
    const auth = await SignInUserWithFacebook();
    const user = await getRedirectResult(auth).then((result) => {
      // const credential = result
      //   ? GoogleAuthProvider.credentialFromResult(result)
      //   : null;

      // The signed-in user info.
      return result?.user;
    });
    if (user != undefined) setToken(user?.refreshToken);
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
    console.log(token);
    const location = useLocation();

    if (token == null) {
      console.log(token);
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
            path="Pricing"
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
