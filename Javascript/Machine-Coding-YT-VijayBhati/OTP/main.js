let inputs = document.querySelector(".inputs");

inputs.addEventListener("input", function (event) {
  let inp = event.target;
  if (isNaN(inp.value)) {
    inp.value = "";
  }
  if (inp.value.length >= 1) {
    let nextInp = inp.nextElementSibling;
    if (nextInp) nextInp.focus();
  }
});

inputs.addEventListener("keyup", function (event) {
  let inp = event.target;
  console.log(inp.value);
  const key = event.key;
  if (key === "Delete" || key === "Backspace") {
    inp.value = "";
    let prevInp = inp.previousElementSibling;
    if (prevInp) prevInp.focus();
  }
});
