import React from "react";
import treatment from "../../../Assets/images/treatment.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const ServicesHero = () => {
    return (
        <div class="container mx-auto py-20">
            <div class="flex flex-col lg:flex-row items-center gap-20">
                <img class="max-w-md rounded-lg shadow-2xl" src={treatment} alt="" />
                <div>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed
                        to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                    </p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ServicesHero;
