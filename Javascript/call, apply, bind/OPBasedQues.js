//! Question - imp

const obj11 = {
  value: 10,
  increment: function () {
    return this.value + 1;
  },
};

const obj22 = {
  value: 20,
};

const increment = obj11.increment.bind(obj22);
console.log(increment());

const obj33 = {
  value: 30,
  increment: obj11.increment,
};

console.log(obj33.increment.call(obj22)); 

const obj44 = {
  value: 40,
  increment: increment,
};

console.log(obj44.increment.apply(obj33)); //! 21-> once bounded with a context u cant change

//==================================================================================

//? Q. Method Borrowing and Context

const objA = {
  x: 10,
  getX: function () {
    return this.x;
  },
};

const objB = {
  x: 20,
};

const objC = {
  x: 30,
};

const borrowedGetX = objA.getX.bind(objB);

console.log(borrowedGetX()); // 20

console.log(borrowedGetX.call(objC)); // ! 20 => be carefull. It will still use the binded conetxt

const anotherBorrowedGetX = objA.getX.apply(objC);

console.log(anotherBorrowedGetX); // 30

//===========================================================================

//? Q.Combination of call, apply, and bind

const obj100 = {
  value: 10,
  increment100: function () {
    return this.value + 1;
  },
};

const obj200 = {
  value: 20,
};
const increment100 = obj100.increment100.bind(obj200);
console.log(increment100()); // 21

const obj300 = {
  value: 30,
  increment100: obj100.increment100,
};

console.log(obj300.increment100.call(obj200)); // 21

const obj400 = {
  value: 40,
  increment100: increment100,
};

console.log(obj400.increment100.apply(obj300)); //!21 , once function is created using bind, then context wont be changed

//========================================================================

//? Q. Dynamic Context Switching

function sayHello() {
  return `Hello, ${this.name}`;
}

const personA = { name: "Alice" };
const personB = { name: "Bob" };

const sayHelloToAlice = sayHello.bind(personA);
console.log(sayHelloToAlice()); //  Hello Alice

const sayHelloToBob = sayHelloToAlice.call(personB);
console.log(sayHelloToBob); // Hello Alice , once binded with the context,then context wont be changed

const sayHelloToCharlie = sayHelloToAlice.bind({ name: "Charlie" });
console.log(sayHelloToCharlie()); // !Hello Alice, once binded with the context,then context wont be changed even if u again use bind

// https://chatgpt.com/c/724e83d7-3e33-42f2-8411-d6b1e966cad8

//==============================================================
