import { Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsPublic from "./components/IsPublic";
import ProfilePage from "./pages/ProfilePage";
import RestaurantsListPage from "./pages/RestaurantsListPage";
import CreateRestaurant from "./pages/CreateRestaurant";
import EditRestaurantPage from "./pages/EditRestaurantPage";
import RestaurantDetailsPage from "./pages/RestaurantDetailsPage";
/* import { FaHeart } from "react-icons/fa"; */

function App() {
  return (
    <div className="App">
      <MyNavbar />
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
          path="/restaurants"
          element={
            <IsPrivate>
              <RestaurantsListPage />
            </IsPrivate>
          }
        />
        <Route
          path="/restaurants/create"
          element={
            <IsPrivate>
              <CreateRestaurant />
            </IsPrivate>
          }
        />
        <Route
          path="/restaurants/:restaurantId"
          element={
            <IsPrivate>
              <RestaurantDetailsPage />
            </IsPrivate>
          }
        />
        <Route
          path="/restaurant/edit/:restaurantId"
          element={
            <IsPrivate>
              <EditRestaurantPage />
            </IsPrivate>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
