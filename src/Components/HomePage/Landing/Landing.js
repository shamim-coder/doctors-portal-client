import React from "react";
import "./Landing.css";
import chair from "../../../Assets/images/chair.png";
import InfoCard from "./InfoCard";

import clock from "../../../Assets/icons/clock.svg";
import map from "../../../Assets/icons/marker.svg";
import phone from "../../../Assets/icons/phone.svg";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const Landing = () => {
    const infoCards = [
        {
            id: 1,
            title: "Opening Hours",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nihil.",
            icon: clock,
            bgColor: "bg-gradient-to-r from-primary to-secondary",
        },
        {
            id: 2,
            title: "Visit our location",
            description: "Brooklyn, NY 10036, United States",
            icon: map,
            bgColor: "bg-neutral",
        },
        {
            id: 3,
            title: "Contact us now",
            description: "+000 123 456789",
            icon: phone,
            bgColor: "bg-gradient-to-r from-primary to-secondary",
        },
    ];

    return (
        <section id="landing" className="pb-10">
            <div class="hero min-h-screen container mx-auto mb-10">
                <div class="flex items-center justify-center flex-col lg:flex-row-reverse gap-10">
                    <img className="w-[594px]" src={chair} alt="" />
                    <div>
                        <h1 class="text-5xl font-bold text-darker">Your New Smile Starts Here</h1>
                        <p class="py-6 text-darker">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1  md:grid-cols-3 container mx-auto gap-10">
                {infoCards.map((infoCard) => (
                    <InfoCard key={infoCard.id} infoCard={infoCard} />
                ))}
            </div>
        </section>
    );
};

export default Landing;
