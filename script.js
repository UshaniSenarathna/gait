// Dummy login
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "admin" && password === "admin") {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  } else {
    alert("Invalid login");
  }
}

// Placeholder for patient section
function showPatientSection() {
  document.getElementById("output").innerText = "Patient management coming soon...";
}

// Simulate gait data collection
function startGaitSession() {
  document.getElementById("output").innerText = "Collecting gait data...";

  let data = generateSampleGaitData(50);
  drawGraph(data);
}

// Export placeholder
function exportData() {
  alert("Export feature coming soon...");
}
