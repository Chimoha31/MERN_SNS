import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Resister from "./pages/resister/Resister";
import { AuthContext } from "./state/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Resister />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/resister"
          element={user ? <Navigate to="?" /> : <Resister />}
        />
      </Routes>
    </Router>
  );
};

export default App;
