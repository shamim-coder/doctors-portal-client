import React from "react";

const PrimaryButton = ({ children, center, onClick }) => {
    return (
        <button onClick={onClick} type="submit" className={`px-7 ${center && "mx-auto"} block btn transition bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white border-0`}>
            {children}
        </button>
    );
};

export default PrimaryButton;
