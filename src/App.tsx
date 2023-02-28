import { Route, Routes } from 'react-router-dom';
import globalStyles from './ui-library/globalStyles';
import Login from './pages/Login';
import Profile from './pages/Profile';
import UserProfile from './pages/UserProfile';
import NotFound from './pages/404';
import About from './pages/About';

const App = () => {
  globalStyles();
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/:user" element={<UserProfile />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
};

export default App;
