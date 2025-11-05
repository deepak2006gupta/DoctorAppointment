import React from 'react';
import { Grid } from '@mui/material';
import AppointmentCard from '../components/AppointmentCard';
import useAppointments from '../hooks/useAppointments';

export default function Appointments() {
  const { appointments, removeAppointment } = useAppointments();

  return (
    <div>
      <h2>Your Appointments</h2>
      <Grid container spacing={2}>
        {appointments.length === 0 ? (
          <p>No appointments booked yet.</p>
        ) : (
          appointments.map((appointment) => (
            <Grid item xs={12} sm={6} md={4} key={appointment.id}>
              <AppointmentCard 
                appointment={appointment} 
                onCancel={() => removeAppointment(appointment.id)} 
              />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}