function delay(delay) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve("done");
    }, delay);
  });
}

(async function executeInDelay() {
  alert(1);
  await delay(2000);
  alert(2);
})();
