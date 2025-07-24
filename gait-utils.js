function simulateGaitData(steps = 50) {
  let time = 0;
  let stepTimes = [];
  for (let i = 0; i < steps; i++) {
    let st = 0.4 + Math.random() * 0.1;
    time += st;
    stepTimes.push({ step: i + 1, time: time.toFixed(2), stepTime: st });
  }
  return stepTimes;
}

function calculateParameters(data) {
  const totalSteps = data.length;
  const totalTime = data.reduce((a, b) => a + b.stepTime, 0);
  const cadence = (totalSteps / totalTime) * 60;
  const avgStepTime = totalTime / totalSteps;
  const strideTime = avgStepTime * 2;
  return { cadence, strideTime };
}
