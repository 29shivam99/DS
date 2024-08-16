// JIO CINEMA

// Q. write a function that takes array of promises and return result after running those promises in series

const seriesPromises = async function (...args) {
  let arrPromises = [...args];
  const length = args.length;
  let results = [];
  for (let i = 0; i < length; i++) {
    const response = await arrPromises[i];
    results.push(response);
  }

  return response;
};
