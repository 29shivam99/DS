document.querySelectorAll(".star").forEach((el) => {
  function fn1(e) {
    const parent = e.target.parentNode;
    console.log(parent.children);
    const arr = [...parent.children];
    //index stores what is the index of the element on which event occured so all stars less thatn qual to index will be gold and all greater than index will be as it was/

    let index = arr.length;
    for (let i = 0; i < arr.length; i++) {
      if (i < index) arr[i].style.color = "gold";
      else arr[i].style.color = "black";
      if (arr[i] === e.target) {
        index = i;
      }
    }
  }
  el.addEventListener("mouseover", fn1);

  function fn(e) {
    const parent = e.target.parentNode;
    console.log(parent.children);
    const arr = [...parent.children];
    arr.forEach((star) => {
      star.style.color = ""; // Reset color to default
    });
  }
  el.addEventListener("mouseout", fn);

  // for click
  el.addEventListener("click", function (e) {
    const parent = e.target.parentNode;
    console.log(parent.children);
    const arr = [...parent.children];
    let index = arr.length;
    for (let i = 0; i < arr.length; i++) {
      if (i < index) arr[i].style.color = "gold";
      if (arr[i] === e.target) {
        index = i;
      }
    }
    el.removeEventListener("mouseout", fn);
  });
});
