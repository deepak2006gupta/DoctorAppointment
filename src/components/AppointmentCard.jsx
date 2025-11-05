import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Typography, Chip, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const AppointmentCard = ({ appointment, onEdit, onCancel }) => {
  const { doctor, department, date, time, patientName, phone, visitType } = appointment;

  return (
    <Card variant="outlined">
      <CardHeader
        title={`${doctor} - ${department}`}
        subheader={`${date} at ${time}`}
      />
      <CardContent>
        <Typography variant="body1">Patient: {patientName}</Typography>
        <Typography variant="body1">Phone: {phone}</Typography>
        <Chip label={visitType} color="primary" />
        <Chip label="Booked" color="default" />
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onEdit(appointment)}>
          <Edit />
        </IconButton>
        <IconButton onClick={() => onCancel(appointment)}>
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default AppointmentCard;