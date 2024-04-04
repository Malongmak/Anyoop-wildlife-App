const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'frontend')));

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Route for handling registration
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  // Logic for registering a new user
  // For example, you could save the user data to a database here

  // Dummy response for successful registration
  res.status(200).json({ message: 'Registration successful!' });
});

// Route for reporting incidences
app.post('/report', (req, res) => {
  const { incidentType, incidentDescription, reporterName, reporterEmail } = req.body;

  // Logic for handling incident reports
  // For example, you could save the incident report data to a database here

  // Dummy response for successful incident report
  res.status(200).json({ message: 'Incident reported successfully' });
});

// Route for updating the list of reported incidences
app.get('/incidences', (req, res) => {
  // Logic to retrieve the list of reported incidences from the database or other data source
  const reportedIncidences = []; // Dummy data, replace with actual data retrieval logic

  // Send the list of reported incidences as JSON
  res.json(reportedIncidences);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});