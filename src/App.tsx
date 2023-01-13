import { Route, Routes } from "react-router-dom";
import globalStyles from "./components/globalStyles";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import UserProfile from "./pages/UserProfile";

const App = () => {
  globalStyles();
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/:user" element={<UserProfile />} />
    </Routes>
  );
};

export default App;
