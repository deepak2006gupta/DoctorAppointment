import { useState } from "react";
import AppointmentForm from "../components/AppointmentForm";
import AppointmentCard from "../components/AppointmentCard";
import { Grid, Typography } from "@mui/material";
import useAppointments from "../hooks/useAppointments";

export default function Home() {
  const { appointments, addAppointment, removeAppointment } = useAppointments();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Book Appointment
      </Typography>
      <AppointmentForm onSubmit={addAppointment} />
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Appointments
      </Typography>
      <Grid container spacing={2}>
        {appointments.map((appointment) => (
          <Grid item xs={12} sm={6} md={4} key={appointment.id}>
            <AppointmentCard
              appointment={appointment}
              onCancel={removeAppointment}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}