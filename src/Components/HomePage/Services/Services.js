import React from "react";

import fluoride from "../../../Assets/images/fluoride.png";
import cavity from "../../../Assets/images/cavity.png";
import whitening from "../../../Assets/images/whitening.png";
import Service from "./Service";
import ServicesHero from "./ServicesHero";

const Services = () => {
    const services = [
        {
            id: 1,
            image: fluoride,
            title: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        },
        {
            id: 2,
            image: cavity,
            title: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        },
        {
            id: 3,
            image: whitening,
            title: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        },
    ];

    return (
        <section>
            <div className="container mx-auto">
                <div className="text-center py-20">
                    <h4 className="text-xl text-primary font-bold mb-3">OUR SERVICES</h4>
                    <h2 className="text-4xl font-semibold">Services We Provide</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service) => (
                        <Service key={service.id} service={service} />
                    ))}
                </div>
            </div>
            <ServicesHero />
        </section>
    );
};

export default Services;
