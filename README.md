# Doctor Appointment UI

This project is a Doctor Appointment UI built with React and Material-UI. It allows users to fill out a form to book appointments and view submitted appointments as cards.

## Features

- **Appointment Booking Form**: Users can enter details such as patient name, phone number, email, doctor, department, appointment date and time, visit type, symptoms, and consent.
- **View Appointments**: Submitted appointments are displayed as cards, showing key details like doctor name, department, date, time, patient name, and visit type.
- **Edit and Cancel Appointments**: Users can edit existing appointments or cancel them with a confirmation dialog.

## Technologies Used

- React (Vite)
- Material-UI
- @emotion/react
- @emotion/styled
- @mui/x-date-pickers
- dayjs

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd doctor-appointment-vite
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Fill out the appointment form with the required details.
- Click "Submit" to add the appointment to the list.
- View the submitted appointments displayed as cards below the form.
- Use the "Cancel" button on an appointment card to remove it from the list.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.