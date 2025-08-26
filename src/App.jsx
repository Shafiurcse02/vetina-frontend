import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import LogoutPage from "./pages/LogoutPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import Profile from "./pages/MyProfile.jsx";
import Doctors from "./pages/Doctors.jsx";
import Contact from "./pages/Contact.jsx";
import MyAppointment from "./pages/MyAppointment.jsx";
import Appointment from "./pages/Appointment.jsx";
import Registration from "./pages/Registration.jsx";

const App = () => {
  const dispatch = useDispatch();

/*   useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]); */

  return (
    <div className="mx-4 sm:mx-[10%]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Public Routes */}
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:speciality" element={<Doctors />} />
            <Route path="/login" element={<Login />} />
<Route path="/reg" element={<Registration />} />
            Registration
            <Route path="/contact" element={<Contact />} />

            {/* Protected Routes */}
            <Route
              path="/logout"
              element={
                <PrivateRoute>
                  <LogoutPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/my-profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/my-appointment"
              element={
                <PrivateRoute>
                  <MyAppointment />
                </PrivateRoute>
              }
            />
            <Route
              path="/appointment/:docId"
              element={
                <PrivateRoute>
                  <Appointment />
                </PrivateRoute>
              }
            />

            {/* Not Found */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
