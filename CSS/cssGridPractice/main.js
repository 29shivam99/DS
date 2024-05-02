function debouncedSearch(searchValue) {
  let timer;
  clearTimeout(timer);
  timer = setTimeout(() => {
    callAPIForSearch();
  }, 400);
}

function callAPIForSearch() {
  //API call to search
}

document.querySelector(".inputField").addEventListener("input", (event) => {
  debouncedSearch(event.target.value);
});
