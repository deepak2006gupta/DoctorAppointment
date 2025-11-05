import React, { useState } from "react";
import { Grid, Typography, Snackbar } from "@mui/material";
import AppointmentForm from "../components/AppointmentForm";
import AppointmentCard from "../components/AppointmentCard";
import useAppointments from "../hooks/useAppointments";

export default function BookAppointment() {
  const { appointments, addAppointment, removeAppointment } = useAppointments();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleFormSubmit = (appointment) => {
    addAppointment(appointment);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Book Appointment
      </Typography>
      <AppointmentForm onSubmit={handleFormSubmit} />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Appointment booked"
      />
      <Typography variant="h5" gutterBottom>
        Appointments List
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