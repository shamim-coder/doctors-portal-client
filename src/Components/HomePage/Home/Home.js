import React from "react";
import AppointmentHero from "../AppointmentHero/AppointmentHero";
import Contact from "../Contact/Contact";
import Landing from "../Landing/Landing";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <main>
            <Landing />
            <Services />
            <AppointmentHero />
            <Testimonials />
            <Contact />
        </main>
    );
};

export default Home;
