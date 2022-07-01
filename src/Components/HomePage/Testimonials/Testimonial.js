import React from "react";

const Testimonial = ({ testimonial }) => {
    return (
        <div className="shadow-lg rounded-lg p-10">
            <p>{testimonial.reviewText}</p>
            <div className="flex items-center gap-5 mt-6">
                <div class="avatar">
                    <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={testimonial.image} alt="" />
                    </div>
                </div>
                <div>
                    <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                    <p>{testimonial.address}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
