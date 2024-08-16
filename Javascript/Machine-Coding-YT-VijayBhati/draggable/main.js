let left = document.querySelector(".left-cont");
let right = document.querySelector(".right-cont");

function handleDrag(event, src, target, targetClass) {
  let element = event.target;

  // needed else not working
  target.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  // this is putting in target box
  target.addEventListener("drop", (event) => {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged element to the selected drop target
    event.target.closest(`.${targetClass}-cont`).appendChild(element);
  });
}

function func1(event) {
  handleDrag(event, left, right, "right");
}

function func2(event) {
  handleDrag(event, right, left, "left");
}
left.addEventListener("drag", func1);
right.addEventListener("drag", func2);
