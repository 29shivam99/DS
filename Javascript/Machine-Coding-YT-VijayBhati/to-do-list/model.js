class Model {
  constructor() {
    this.state = [];
  }
  fetchTasks = async function () {
    this.state = [
      {
        task: "Take medicine at 10:30 pm",
        currentStatusOfTask: "to do",
      },
      {
        task: "abcd ",
        currentStatusOfTask: "to do",
      },
      {
        task: "amjskas",
        currentStatusOfTask: "completed",
      },
      {
        task: "jksjdn 9u90sd ckjs doc ",
        currentStatusOfTask: "deleted",
      },
    ];
  };
}

// Creating an instance of the Model class and exporting it
const modelInstance = new Model();
export default modelInstance;
