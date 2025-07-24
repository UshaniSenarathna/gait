let patients = [];

function showAddPatient() {
  const name = prompt("Enter patient name:");
  if (!name) return;
  const age = prompt("Enter age:");
  const gender = prompt("Enter gender:");
  const record = { name, age, gender, id: Date.now() };
  patients.push(record);
  savePatients();
  displayPatients();
}

function displayPatients() {
  const section = document.getElementById('patient-section');
  section.innerHTML = "<h3>Patients</h3>";
  patients.forEach(p => {
    section.innerHTML += `<div>👤 ${p.name} | Age: ${p.age} | Gender: ${p.gender}</div>`;
  });
}

function savePatients() {
  const user = localStorage.getItem('activeUser');
  localStorage.setItem(`patients_${user}`, JSON.stringify(patients));
}

function loadPatients() {
  const user = localStorage.getItem('activeUser');
  const stored = localStorage.getItem(`patients_${user}`);
  if (stored) patients = JSON.parse(stored);
  displayPatients();
}

function startSession() {
  const data = simulateGaitData();
  const ctx = document.getElementById("graph").getContext("2d");
  ctx.clearRect(0, 0, 400, 200);
  ctx.beginPath();
  data.forEach((d, i) => {
    ctx.lineTo(i * 8, 200 - d.stepTime * 100);
  });
  ctx.strokeStyle = "#0077cc";
  ctx.stroke();

  const params = calculateParameters(data);
  document.getElementById("report-output").textContent =
    `Cadence: ${params.cadence.toFixed(2)} steps/min\n` +
    `Stride Time: ${params.strideTime.toFixed(2)} sec\n`;
}

function exportReport() {
  const output = document.getElementById("report-output").textContent;
  const blob = new Blob([output], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "gait_report.txt";
  link.click();
}
