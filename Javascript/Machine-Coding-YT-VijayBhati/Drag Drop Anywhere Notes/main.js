let container = document.querySelector(".notes-container");

document.addEventListener("DOMContentLoaded", function () {
  container.addEventListener("dragstart", function (event) {
    if (event.target.dataset) {
      //console.log("smklm");
      let draggedObject = event.target;
      container.addEventListener("dragover", function (event) {
        event.preventDefault();
      });
      container.addEventListener("drop", function (event) {
        event.preventDefault();
        let left = draggedObject.offsetLeft;
        let top = draggedObject.offsetTop;

        // console.log(left, top);
        //console.log(event.pageX, event.pageY);

        draggedObject.style.backgroundColor = "pink";
        draggedObject.style.position = "fixed";
        draggedObject.style.top = `${event.pageY}px`;
        draggedObject.style.left = `${event.pageX}px`;

        console.log();
      });
    }
  });
});
