import React from "react";
import { DoubleOrbit } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";

const Spinner = () => {
    return (
        <div className="min-h-screen">
            <DoubleOrbit text={"Loading..."} width={"150px"} height={"150px"} />;
        </div>
    );
};

export default Spinner;
