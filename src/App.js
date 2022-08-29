import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsPublic from "./components/IsPublic";
import ProfilePage from "./pages/ProfilePage";
import RestaurantsListPage from "./pages/RestaurantsListPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signup"
          element={
            <IsPublic>
              <SignupPage />
            </IsPublic>
          }
        />
        <Route
          path="/login"
          element={
            <IsPublic>
              <LoginPage />
            </IsPublic>
          }
        />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />
        <Route
          path="/restaurantslist"
          element={
            <IsPublic>
              <RestaurantsListPage />
            </IsPublic>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
