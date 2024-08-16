let myVar = 100;

function func1() {
  let a = 12;
  console.log(a);
  func2();
}

function func2() {
  let b = 12;
  console.log(b);
  func3();
}

function func3() {
  let c = 12;
  console.log(c);
}

func1();
console.log("end");
