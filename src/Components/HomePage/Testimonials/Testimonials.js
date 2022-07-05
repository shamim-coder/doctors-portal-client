import React from "react";
import Testimonial from "./Testimonial";
import "./Testimonials.css";
import people1 from "../../../Assets/images/people1.png";
import people2 from "../../../Assets/images/people2.png";
import people3 from "../../../Assets/images/people3.png";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Winson Herry",
            address: "Los Angeles",
            image: people1,
            reviewText: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        },
        {
            id: 2,
            name: "Oliver Ava",
            address: "Chicago",
            image: people2,
            reviewText: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        },
        {
            id: 3,
            name: "Emma Winson",
            address: "California",
            image: people3,
            reviewText: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        },
    ];

    return (
        <section className="testimonials mb-20">
            <div className="container max-auto">
                <div className="py-24">
                    <h4 className="text-primary font-bold text-xl">Testimonials</h4>
                    <h1 className="text-4xl font-semibold text-darker">What Our Patients Says</h1>
                </div>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-10">
                    {testimonials.map((testimonial) => (
                        <Testimonial key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
