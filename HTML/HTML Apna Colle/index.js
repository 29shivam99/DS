console.log(document.getElementById("id1").value);
document.getElementById("id1");
console.log(1);

function onRadio1Click(event) {
  console.log(2);
  console.log(event);
  console.log(event.target);
  console.log(event.target.value);
}

function func1() {
  if (document.getElementById("game1").checked) {
    console.log("Football checked");
    sports = document.getElementById("sportsSelected");
    sports.innerText += "Football";
  } else {
    sports.innerText = "Football";
  }

  if (document.getElementById("game2").checked) {
    console.log("Cricket checked");
    sports = document.getElementById("sportsSelected");
    sports.innerText += "Cricket";
  }
}

let superHeroes = [
  { name: "Batman", costumeColor: "black" },
  { name: "Superman", costumeColor: "red" },
  { name: "Spiderman", costumeColor: "blue" },
  { name: "Ironman", costumeColor: "golden" },
];

console.log(superHeroes[1].name);

superHeroes.push({
  name: "Batman",
  costumeColor: "black",
  name: 10000,
  name: "None",
});

console.log(superHeroes);

let jsObj = {
  name: "shivam",
  age: 23,
};

console.log(JSON.stringify(jsObj));

let str = JSON.stringify(jsObj);
console.log(JSON.stringify(jsObj));

console.log(JSON.parse(str));
