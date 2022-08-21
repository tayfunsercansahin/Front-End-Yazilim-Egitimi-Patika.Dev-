
let isActive = false;
console.log(isActive);
isActive = true;
console.log(isActive);

let userName;
let isUserName = Boolean(userName);
console.log(isUserName);

Boolean("11"); // true
Boolean("0"); // true
Boolean(""); //false
Boolean(0); // false

userName = "user";
console.log("Username: ", Boolean(userName)); // true

console.log(Boolean(0 === 0)); // true

let a;
console.log(Boolean(a));

const b = "0";
console.log(Boolean(b));

var z = {2: 'js'};
console.log(Boolean(z));

var x = 10 / 'a';
console.log(Boolean(x));

var u = true;
console.log(Boolean(u));
