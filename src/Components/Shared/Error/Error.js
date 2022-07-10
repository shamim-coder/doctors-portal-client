import React from "react";

const Error = ({ error }) => {
    return (
        <div>
            <h2 className="text5xl text-center">{error?.message || "Unknown Error"}</h2>
        </div>
    );
};

export default Error;
