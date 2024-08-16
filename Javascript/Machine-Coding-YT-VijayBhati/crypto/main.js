const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
const cardsContainer = document.getElementsByClassName(
  "crypto-cards-container"
)[0];
let data;
async function fetchData() {
  const result = await fetch(URL);
  data = await result.json();

  let htmlString = ``;
  data.map(
    (item) =>
      (htmlString += `<div class="crypto-cards">
    <div class="crypto-card-logo">
        <img src=${item.image} class="logo"/>
    </div>
    <div class="crypto-card-details">
      <div class="details details-1">
        <span class="crypto-data crypto-name">${item.name}</span>
        <span class="crypto-data crypto-id">${item.id}</span>
      </div>
      <div class="details details-2">
        <span class="crypto-data crypto-short-name">${item.symbol}</span>
        <span class="crypto-data crypto-interest">${item.ath_change_percentage}</span>
      </div>
    </div> 
  </div>`)
  );
  console.log(cardsContainer);
  cardsContainer.innerHTML = `${htmlString}`;
}

document.addEventListener("DOMContentLoaded", fetchData);
