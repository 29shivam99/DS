const URL = `https://swapi.dev/api/starships/9/`;

function fetchData(expiryTime) {
  let cache = {};

  return async function getStarWarsShips() {
    const cacheKey = JSON.stringify(`${URL}`);
    if (cache[cacheKey] && cache[cacheKey]["expiry"] - new Date() > 0) {
      // return cached data
      console.log(cache[cacheKey]);
      return cache[cacheKey].data;
    } else {
      // call API and store data in cache
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        cache[cacheKey] = { data: "", expiry: "" };
        cache[cacheKey]["data"] = data;
        cache[cacheKey]["expiry"] = new Date() + expiryTime;
      } catch (e) {
        throw e;
      }
    }
  };
}

const fetchDataFromAPI = fetchData(1000);

console.log(fetchDataFromAPI(2));
setTimeout(() => {
  console.log(fetchDataFromAPI(2));
}, 5000);
