class View {
  constructor() {}

  attachEventListeners = function (targetElement, eventName, handler) {
    targetElement.addEventListener(eventName, handler);
  };

  renderTodoList = function (listTodo, data) {
    //console.log(data[0].task, listTodo);
    let child = document.createElement("div");
    child.classList.add("to-do-item");
    child.innerHTML = `<div class="taskName" draggable="true">${data.task}</div>
        <button class="btn btn-edit">Edit</button>
        <button class="btn btn-completed">Completed</button>
        <button class="btn btn-delete">Delete</button>`;
    listTodo.appendChild(child);
  };

  // renderCompletedList = function () {
  //   <div class="completed-task"></div>;
  // };
}

const viewInstance = new View();
export default viewInstance;
