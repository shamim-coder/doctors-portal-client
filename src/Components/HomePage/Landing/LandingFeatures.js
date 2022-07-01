import React from "react";
import clock from "../../../Assets/icons/clock.svg";
import map from "../../../Assets/icons/marker.svg";
import phone from "../../../Assets/icons/phone.svg";

const LandingFeatures = () => {
    return (
        <div className="grid grid-cols-3 container mx-auto gap-10">
            <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary pl-8 pr-5 py-12 flex items-center gap-5">
                <img src={clock} alt="" />
                <div className="text-white">
                    <h4 className="text-xl mb-2 font-bold">Opening Hours</h4>
                    <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nihil.</p>
                </div>
            </div>
            <div className="rounded-2xl bg-neutral pl-8 pr-5 py-12 flex items-center gap-5">
                <img src={map} alt="" />
                <div className="text-white">
                    <h4 className="text-xl mb-2 font-bold">Visit our location</h4>
                    <p className="text-base">Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary pl-8 pr-5 py-12 flex items-center gap-5">
                <img src={phone} alt="" />
                <div className="text-white">
                    <h4 className="text-xl mb-2 font-bold">Contact us now</h4>
                    <p className="text-base">+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default LandingFeatures;
