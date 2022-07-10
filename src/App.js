import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar/Navbar";
import About from "./Components/Pages/About/About";
import Reviews from "./Components/Pages/Reviews/Reviews";
import Profile from "./Components/Pages/Profile/Profile";
import Contact from "./Components/Pages/Contact/Contact";
import Home from "./Components/HomePage/Home/Home";
import Login from "./Components/Pages/Authentication/Login/Login";
import Footer from "./Components/Shared/Footer/Footer";
import Appointments from "./Components/Pages/Appointments/Appointments/Appointments";
import AvailableSlots from "./Components/Pages/Appointments/AvailableSlots/AvailableSlots";
import NotFound from "./Components/Shared/NotFound/NotFound";
import Signup from "./Components/Pages/Authentication/Signup/Signup";
import ForgotPassword from "./Components/Pages/Authentication/ForgotPassword/ForgotPassword";
import RequireAuth from "./Components/Pages/Authentication/RequireAuth/RequireAuth";
import { createContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import MyAppointments from "./Components/Pages/Dashboard/MyAppointments";
import MyReview from "./Components/Pages/Dashboard/MyReview";
import Setting from "./Components/Pages/Dashboard/Setting";
import Error from "./Components/Shared/Error/Error";
import Users from "./Components/Pages/Dashboard/Users";
import RequireAdmin from "./Components/Pages/Authorization/RequireAdmin";

export const UserContext = createContext({});

function App() {
    const [user, setUser] = useState({});
    return (
        <>
            <UserContext.Provider value={[user, setUser]}>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />

                    <Route
                        path="/appointments"
                        element={
                            <RequireAuth>
                                <Appointments />
                            </RequireAuth>
                        }
                    >
                        <Route path=":serviceId" element={<AvailableSlots />} />
                    </Route>

                    <Route
                        path="/dashboard"
                        element={
                            <RequireAuth>
                                <Dashboard />
                            </RequireAuth>
                        }
                    >
                        <Route index element={<MyAppointments />} />
                        <Route path="my-review" element={<MyReview />} />
                        <Route path="my-appointment" element={<MyAppointments />} />
                        <Route path="setting" element={<Setting />} />
                        <Route
                            path="users"
                            element={
                                <RequireAdmin>
                                    <Users />
                                </RequireAdmin>
                            }
                        />
                    </Route>

                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/forgot" element={<ForgotPassword />} />
                    <Route path="/profile" element={<Profile />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
                <ToastContainer />
            </UserContext.Provider>
        </>
    );
}

export default App;
