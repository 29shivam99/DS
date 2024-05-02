function renderProgress(percent) {
  // let value = document.getElementById("value").value;
  // let maxValue = document.getElementById("maxValue").value || 1;
  // let percent = 100;
  // if (value <= maxValue) percent = (value / maxValue) * 100;
  document.documentElement.style.setProperty("--width", percent);
}

let percent = 0;
setInterval(() => {
  percent++;
  if (percent <= 100) renderProgress(percent);
}, 50);
