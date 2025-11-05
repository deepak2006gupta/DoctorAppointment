import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Button,
  Snackbar,
  Grid,
  Typography,
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { useAppointments } from "../hooks/useAppointments";

export default function AppointmentForm() {
  const { addAppointment } = useAppointments();
  const [formData, setFormData] = useState({
    patientName: "",
    phoneNumber: "",
    email: "",
    doctor: "",
    department: "",
    appointmentDate: null,
    appointmentTime: null,
    visitType: "New",
    symptoms: "",
    consent: false,
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.patientName) newErrors.patientName = "Required";
    if (!/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "Invalid phone number";
    if (formData.doctor === "") newErrors.doctor = "Required";
    if (!formData.appointmentDate) newErrors.appointmentDate = "Required";
    if (!formData.appointmentTime) newErrors.appointmentTime = "Required";
    if (!formData.consent) newErrors.consent = "You must agree to the policies";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addAppointment(formData);
      setFormData({
        patientName: "",
        phoneNumber: "",
        email: "",
        doctor: "",
        department: "",
        appointmentDate: null,
        appointmentTime: null,
        visitType: "New",
        symptoms: "",
        consent: false,
      });
      setSnackbarOpen(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5">Book Appointment</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Patient Name"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            error={!!errors.patientName}
            helperText={errors.patientName}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required error={!!errors.doctor}>
            <InputLabel>Doctor</InputLabel>
            <Select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
            >
              <MenuItem value="Dr. Rao - Cardiology">Dr. Rao - Cardiology</MenuItem>
              <MenuItem value="Dr. Meera - Dermatology">Dr. Meera - Dermatology</MenuItem>
              <MenuItem value="Dr. Arjun - Pediatrics">Dr. Arjun - Pediatrics</MenuItem>
            </Select>
            {errors.doctor && <Typography color="error">{errors.doctor}</Typography>}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Department</InputLabel>
            <Select
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              <MenuItem value="Cardiology">Cardiology</MenuItem>
              <MenuItem value="Dermatology">Dermatology</MenuItem>
              <MenuItem value="Pediatrics">Pediatrics</MenuItem>
              <MenuItem value="General Medicine">General Medicine</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <DatePicker
            label="Appointment Date"
            value={formData.appointmentDate}
            onChange={(newValue) => setFormData({ ...formData, appointmentDate: newValue })}
            renderInput={(params) => <TextField {...params} error={!!errors.appointmentDate} helperText={errors.appointmentDate} required fullWidth />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TimePicker
            label="Appointment Time"
            value={formData.appointmentTime}
            onChange={(newValue) => setFormData({ ...formData, appointmentTime: newValue })}
            renderInput={(params) => <TextField {...params} error={!!errors.appointmentTime} helperText={errors.appointmentTime} required fullWidth />}
          />
        </Grid>
        <Grid item xs={12}>
          <RadioGroup
            name="visitType"
            value={formData.visitType}
            onChange={handleChange}
          >
            <FormControlLabel value="New" control={<Radio />} label="New" />
            <FormControlLabel value="Follow-up" control={<Radio />} label="Follow-up" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Symptoms / Notes"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            multiline
            rows={4}
            inputProps={{ maxLength: 200 }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl required error={!!errors.consent}>
            <FormControlLabel
              control={<Checkbox checked={formData.consent} onChange={handleChange} name="consent" />}
              label="I agree to clinic policies"
            />
            {errors.consent && <Typography color="error">{errors.consent}</Typography>}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">Submit</Button>
          <Button type="button" onClick={() => setFormData({})} variant="outlined" color="secondary">Reset</Button>
        </Grid>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message="Appointment booked"
      />
    </form>
  );
}