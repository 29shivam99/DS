// json placeholder API

let currentPage = 1;
let hasMoreData = true;
let isFetchingData = false;
const URL = `https://jsonplaceholder.typicode.com/posts?_page=`;

let root = document.getElementById("root");

async function fetchData() {
  isFetchingData = true;
  let res = await fetch(URL + currentPage);
  let data = await res.json();
  isFetchingData = false;
  console.log(data);

  if (data.length === 0) {
    hasMoreData = false;
    return;
  }
  for (let post of data) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<h2>${post.title}</h2> <p>${post.body}</p>`;
    root.appendChild(newDiv);
  }
  currentPage++;
}

window.addEventListener("scroll", () => {
  if (isFetchingData || !hasMoreData) return;
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    fetchData();
  }
});
fetchData();
