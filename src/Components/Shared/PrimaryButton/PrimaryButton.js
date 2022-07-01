import React from "react";

const PrimaryButton = ({ children }) => {
    return <button class="btn transition bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white border-0">{children}</button>;
};

export default PrimaryButton;
