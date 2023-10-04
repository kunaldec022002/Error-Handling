console.log("Using var Keyword");
var x = 1;
if (x === 1) {
	var x = 2;
	console.log(x); // Output: 2
}
console.log(x); // Output: 2


// Using let keyword
console.log("Using let Keyword");
let x1 = 1;
if (x1 === 1) {
	let x1 = 2;
	console.log(x1); // Output: 2
}
console.log(x1); // Output: 1


// Using const keyword
console.log("Using const Keyword");
const number = 48;

// Changing const value will display TypeError
try {
	const number = 42;
} catch (err) {
	console.log(err);
}
console.log(number); // Output: 48
