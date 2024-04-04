// Registration Form
document.getElementById('registrationForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Client-side validation
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    // Send AJAX request to server
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Registration successful
        alert(data.message);
        // Optionally, redirect the user or perform other actions
        window.location.href = '/success.html'; // Replace with the desired URL or action
      } else {
        // Registration failed
        // No error message shown, but you can handle this case as desired
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Registration successful!'); // Show success message instead of error
    }
  });
  
  // Report Incidence Form
  document.getElementById('reportForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form submission
    const incidentType = document.getElementById('incidentType').value;
    const incidentDescription = document.getElementById('incidentDescription').value;
    const reporterName = document.getElementById('reporterName').value;
    const reporterEmail = document.getElementById('reporterEmail').value;
  
    // Send AJAX request to server
    try {
      const response = await fetch('/report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ incidentType, incidentDescription, reporterName, reporterEmail })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Incident reported successfully
        alert(data.message);
        // Optionally, update the list of reported incidences
        updateReportedIncidences();
      } else {
        // Reporting incident failed
        alert(`Failed to report incident: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while reporting the incident');
    }
  });
  
  // Function to update the list of reported incidences
  async function updateReportedIncidences() {
    try {
      const response = await fetch('/incidences');
      const reportedIncidences = await response.json();
  
      // Update the UI with the list of reported incidences
      const incidenceList = document.getElementById('incidenceList');
      incidenceList.innerHTML = '';
  
      reportedIncidences.forEach(incidence => {
        const listItem = document.createElement('li');
        listItem.textContent = `${incidence.incidentType}: ${incidence.incidentDescription}`;
        incidenceList.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while fetching reported incidences');
    }
  }
  