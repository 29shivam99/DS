// Problem Statement -
// Implement a ClearAllTimeout function that will stop all the running
// setTimeout at once.

let allSettimeoutIds = [];

let originalSetTimeout = window.setTimeout;

window.setTimeout = function (cb, delay) {
  let id = originalSetTimeout(cb, delay);
  allSettimeoutIds.push(id);
};

let timeoutId1 = setTimeout(() => {
  console.log("l");
}, 1000);

let timeoutId2 = setTimeout(() => {
  console.log("2ll");
}, 1000);

const clearAllTimeout = function () {
  for (let id of allSettimeoutIds) {
    clearTimeout(id);
  }
  allSettimeoutIds.length = 0;
};

clearAllTimeout();
