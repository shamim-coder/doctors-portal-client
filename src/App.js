import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar/Navbar";
import About from "./Components/Pages/About/About";
import Appointments from "./Components/Pages/Appointments/Appointments";
import Reviews from "./Components/Pages/Reviews/Reviews";
import Profile from "./Components/Pages/Profile/Profile";
import Contact from "./Components/Pages/Contact/Contact";
import Home from "./Components/HomePage/Home/Home";
import Login from "./Components/Pages/Login/Login";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />

                <Route path="/profile" element={<Profile />} />

                <Route path="*" element />
            </Routes>
        </>
    );
}

export default App;
