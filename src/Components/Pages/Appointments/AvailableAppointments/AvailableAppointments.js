import { format } from "date-fns";
import { NavLink } from "react-router-dom";
import useServices from "../../../../Hooks/useServices";

const AvailableAppointments = ({ selected }) => {
    const { services, loading } = useServices();

    return (
        <>
            <div className="text-center py-14">
                <h3 className="text-2xl font-bold text-primary mb-3">Available Services on {selected && format(selected, "PP")}</h3>
                <p className="text-[#939393] text-lg">Please select a service.</p>
            </div>

            <div className="grid grid-cols-3 gap-10">
                {loading
                    ? "Loading..."
                    : services.map((service) => {
                          const { slots, name, _id } = service;
                          return (
                              <NavLink
                                  style={({ isActive }) => (isActive ? { backgroundColor: "#3A4256", color: "#D1D5DB" } : undefined)}
                                  key={_id}
                                  to={`/appointments/${_id}`}
                                  className="transition rounded-2xl hover:text-gray-300 bg-white hover:bg-darker shadow-md py-14 text-center"
                              >
                                  <h3 className="text-primary font-bold text-xl mb-2">{name}</h3>
                                  <p className="">
                                      Available {slots.length > 1 ? "Spaces" : "Space"}: {slots.length}
                                  </p>
                              </NavLink>
                          );
                      })}
            </div>
        </>
    );
};

export default AvailableAppointments;
