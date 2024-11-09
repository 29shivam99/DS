const name = "Shivam";
function func(a, b) {
  console.log(this.name, a, b);
}

const Person = {
  name: "Aryan",
  id: 12,
};
const num = 12;
const boundFunc = func.bind(Person, num);

func();
boundFunc();

const boundFunc2 = func.myBind(Person, num);
boundFunc2(51);
console.log(Person);

///////////////

Function.prototype.myCall = function () {};
