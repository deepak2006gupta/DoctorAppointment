import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Doctor Appointment
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/book">
          Book Appointment
        </Button>
        <Button color="inherit" component={Link} to="/appointments">
          Appointments
        </Button>
      </Toolbar>
    </AppBar>
  );
}