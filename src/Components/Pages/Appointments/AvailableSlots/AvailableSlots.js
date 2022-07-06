import { format } from "date-fns/esm";
import { useParams, useOutletContext } from "react-router-dom";
import useServices from "../../../../Hooks/useServices";
import Spinner from "../../../Shared/Spinner/Spinner";

const AvailableSlots = () => {
    const [, setTreatment, date] = useOutletContext();
    const { serviceId } = useParams();
    const formateDate = format(date, "PP");
    const { services, loading, refetch } = useServices(formateDate);

    if (loading) {
        return <Spinner />;
    }

    const availableService = services.find((service) => service._id === serviceId);

    return (
        <div className="my-14 container max-auto text-center">
            {availableService?.available.length === 0 ? (
                <h3 className="text-2xl text-error text-center mb-10">No Slots Available at this Space, Please try an another day</h3>
            ) : (
                <h3 className="text-2xl text-primary text-center mb-10">Available slots for Teeth Orthodontics.</h3>
            )}

            <div className="grid grid-cols-3 gap-10 ">
                {loading
                    ? "Loading..."
                    : availableService?.available?.map((slot, index) => (
                          <div key={index} className="shadow-lg px-5 py-10 rounded-xl">
                              <h2 className="text-xl font-semibold text-primary mb-2">{slot?.name}</h2>
                              <h5 className="mb-5">{slot?.qualification}</h5>
                              <p className="mb-5">{slot?.time}</p>

                              <label
                                  htmlFor="booking-modal"
                                  onClick={() => setTreatment({ slot, service: availableService, refetch })}
                                  className="px-7 btn modal-button transition bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white border-0"
                              >
                                  Book Appointment
                              </label>
                          </div>
                      ))}
            </div>
        </div>
    );
};

export default AvailableSlots;
