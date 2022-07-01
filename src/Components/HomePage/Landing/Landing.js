import React from "react";
import "./Landing.css";
import landingImage from "../../../Assets/images/chair.png";
import LandingFeatures from "./LandingFeatures";

const Landing = () => {
    return (
        <section id="landing">
            <div class="hero min-h-screen container mx-auto">
                <div class="flex items-center justify-center flex-col lg:flex-row-reverse gap-10">
                    <img className="w-[594px]" src={landingImage} alt="" />
                    <div>
                        <h1 class="text-5xl font-bold text-darker">Your New Smile Starts Here</h1>
                        <p class="py-6 text-darker">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button class="btn transition bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white border-0">Get Started</button>
                    </div>
                </div>
            </div>
            <LandingFeatures />
        </section>
    );
};

export default Landing;
