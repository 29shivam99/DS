async function sleep(delay) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("complete");
    }, delay);
  });
}

async function main() {
  console.log(1);
  await sleep(2000);
  console.log(2);
}

main();
