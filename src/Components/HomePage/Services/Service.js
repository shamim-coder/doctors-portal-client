import React from "react";
import "./Service.css";

const Service = ({ service }) => {
    return (
        <div className="text-center px-12 py-8 shadow-lg  rounded-xl">
            <img className="mx-auto mb-8" src={service.image} alt="" />
            <h4 className="mb-3 text-xl font-semibold">{service.title}</h4>
            <p>{service.description}</p>
        </div>
    );
};

export default Service;
