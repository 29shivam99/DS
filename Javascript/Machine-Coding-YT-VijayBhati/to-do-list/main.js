import modelInstance from "./model.js";
import viewInstance from "./view.js";

let addButton = document.querySelector(".btn-add");
let searchTodoButton = document.querySelector(".btn-to-do-search");
let searchCompletedButton = document.querySelector(
  ".btn-completed-tasks-search"
);
let listTodo = document.querySelector(".list-to-do");
let listCompleted = document.querySelector(".list-tasks-completed");
let addInput = document.querySelector(".add-item-input");

document.addEventListener("DOMContentLoaded", async function () {
  await modelInstance.fetchTasks();

  // defining all the event listeners
  const addInputFunc = function (event) {
    console.log(event);
    if (event.key === "Enter") {
      if (event.target.value) {
        addButton.removeAttribute("disabled");
        addTask(event);
      }
    }
    if (event.target.value) {
      addButton.removeAttribute("disabled");
    } else {
      addButton.setAttribute("disabled", "true");
    }
  };
  const addTask = function (event) {
    modelInstance.state.push({
      task: addInput.value,
      currentStatusOfTask: "to do",
    });
    addInput.value = "";
    viewInstance.renderTodoList(listTodo, modelInstance.state.at(-1));
  };
  const searchToDo = function () {};
  const searchCompleted = function () {};
  const dropToCompleted = function (event) {
    let element = event.target;
    // needed else not working
    document
      .querySelector(".completed-tasks-container")
      .addEventListener("dragover", function (event) {
        event.preventDefault();
      });

    // this is putting in target box
    document
      .querySelector(".completed-tasks-container")
      .addEventListener("drop", (event) => {
        //! live update
        // prevent default action (open as link for some elements)
        //event.preventDefault();

        let v = element.closest(".to-do-item").querySelector(".btn-edit");
        console.log(element, v);
        //remove(v);
        // move dragged element to the selected drop target

        listCompleted.appendChild(element);
      });
  };

  // call view to set-up the addEventListeners
  viewInstance.attachEventListeners(addInput, "keydown", addInputFunc);
  viewInstance.attachEventListeners(addInput, "enter", addTask);
  viewInstance.attachEventListeners(addButton, "click", addTask);
  viewInstance.attachEventListeners(searchTodoButton, "click", searchToDo);
  viewInstance.attachEventListeners(
    searchCompletedButton,
    "click",
    searchCompleted
  );
  viewInstance.attachEventListeners(listTodo, "dragstart", dropToCompleted);
});
