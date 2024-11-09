// inputs

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2");
  }, 2000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3");
  }, 3000);
});

let p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p4");
  }, 4000);
});

let p5 = Promise.resolve("p5");

let p6 = 22;
let p7 = "99";

//! promise.all - asked a loottt

Promise.all = function (Promises) {
  if (!Array.isArray(Promises)) throw new Error("Input must be array");

  
};
