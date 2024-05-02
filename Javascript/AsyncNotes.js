const clickButton = document.getElementById("clickMe");
function handleClick() {
  console.log("Clicked handled");
}
clickButton.addEventListener("click", handleClick);

let result = 0;
for (let i = 0; i < 100000000; i++) {
  result += i;
}
console.log(result);

// in above example even if we click Button as soon as page loads still the result prints first then "Clicked handled" since all sync code is done and the call stack is empty then only the async code from callback queue or microtask queue starts to execute.

////////////// Importance of callback /////////////////

// function fetchApiData() {
//   setTimeout(() => {
//     console.log("callback called for timeout");
//     return 25;
//   }, 2000);
// }

// const apiData = fetchApiData();

// display(apiData);
// console.log(apiData * 8);

////////////////// Promies ///////////////////////

function setTimer(duration) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, 2000);

    setTimeout(() => {
      resolve("Done");
    }, 3000);
  });
  return promise;
}

setTimer(2000).then((data) => {
  console.log(data);
});

//find above's output
