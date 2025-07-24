// Generate dummy data (simulate MPU-6050 readings)
function generateSampleGaitData(count) {
  let data = [];
  let time = 0;
  for (let i = 0; i < count; i++) {
    let stepTime = 0.4 + Math.random() * 0.1; // seconds
    time += stepTime;
    data.push({ time: time.toFixed(2), stepTime });
  }
  return data;
}

// Simple graph using Canvas
function drawGraph(data) {
  const canvas = document.getElementById("graph");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.moveTo(0, 200 - data[0].stepTime * 100);
  data.forEach((point, i) => {
    ctx.lineTo(i * 8, 200 - point.stepTime * 100);
  });
  ctx.strokeStyle = "#0077cc";
  ctx.stroke();
}
