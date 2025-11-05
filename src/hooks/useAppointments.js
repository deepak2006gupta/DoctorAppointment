import { useState } from "react";

export default function useAppointments() {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, appointment]);
  };

  const removeAppointment = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.filter((appointment) => appointment.id !== id)
    );
  };

  const editAppointment = (updatedAppointment) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === updatedAppointment.id ? updatedAppointment : appointment
      )
    );
  };

  return {
    appointments,
    addAppointment,
    removeAppointment,
    editAppointment,
  };
}