let container = document.querySelectorAll(".container")[0];
let blocks = new Array();
container.addEventListener("click", function (event) {
  let ele = event.target;

  // ! see how to use data-index in JS
  if (ele.dataset.index) {
    ele.style.backgroundColor = "green";
    blocks.push(ele);
  }
  if (blocks.length === 7) {
    for (let i = 0; i < blocks.length; i++) {
      setTimeout(() => {
        console.log(i);
        blocks[i].style.backgroundColor = "white";
      }, 1000 * (i + 1));
    }
  }
});
