import React from "react";

const InfoCard = ({ infoCard }) => {
    return (
        <div className={`rounded-2xl ${infoCard.bgColor} text-center xl:text-left flex flex-col xl:justify-start justify-center xl:flex-row p-8 gap-5 items-center`}>
            <img className="w-[86px] my-5" src={infoCard.icon} alt="" />
            <div className="text-white">
                <h4 className="text-xl mb-2 font-bold">{infoCard.title}</h4>
                <p className="text-base">{infoCard.description}</p>
            </div>
        </div>
    );
};

export default InfoCard;
