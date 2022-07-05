import chair from "../../../../Assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import "./Calender.css";

const AppointmentCalender = ({ selected, setSelected }) => {
    return (
        <div className="hero min-h-screen">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-around gap-10">
                <img src={chair} className="w-1/2 rounded-lg shadow-2xl" alt="" />
                <div>
                    <DayPicker
                        modifiersClassNames={{
                            selected: "selected-day",
                        }}
                        className="bg-white p-5 rounded-xl shadow-lg"
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentCalender;
