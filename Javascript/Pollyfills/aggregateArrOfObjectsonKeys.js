const endorsements = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" },
];
// console.log(aggregate(endorsements, "user", "skill"));

// op:

// [
//   {
//     skill: "css",
//     user: ["Bill", "Sue"],
//   },
//   {
//     skill: "javascript",
//     user: ["Chad", "Bill", "Sue"],
//   },
//   {
//     skill: "html",
//     user: ["Sue"],
//   },
// ];

// Given an array of objects and two keys "on" and "who", aggregate the
// "who" values on the "on" values.

// just create an object where key is 'on value' and value is the object which we need in OP of formal {on: 'asas', value: ['we', 'ssdsd']}
function aggregate(arr, who, on) {
  let ans = {};
  for (let item of arr) {
    let whoValue = item[who];
    let onValue = item[on];

    if (ans[onValue]) {
      ans[onValue][who].push(whoValue);
    } else {
      ans[onValue] = {
        [on]: onValue,
        [who]: [whoValue],
      };
    }
  }
  console.log(Object.values(ans));
  return Object.values(ans);
}

aggregate(endorsements, "user", "skill");

/////////////////
