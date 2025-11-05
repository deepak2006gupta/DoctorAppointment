import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import BookAppointment from "./pages/BookAppointment";
import Appointments from "./pages/Appointments";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookAppointment />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </Container>
    </Router>
  );
}