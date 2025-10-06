/*
== Equal to value
!= NOT equal to value
> Greater than
< Lesser than
>= Greater than OR equal to
<= Lesser than OR equal to
=== Equal to value AND datatype
!== NOT equal to value AND datatype

|| AND
&& OR
*/
console.log('############### Conditions and Comparisons ##############');
let x = 2;
console.log(x == 2); 		// true
console.log(x == 1); 		// false

console.log('###############');
console.log(x != 1);		// true
console.log(x != 2);		// false

console.log('###############');
console.log(x > 1);			// true
console.log(x > 2);			// false

console.log('###############');
console.log(x < 3);			// true
console.log(x < 1);			// false

console.log('###############');
console.log(x >= 3);		// false
console.log(x >= 2);		// true
console.log(x >= 1);		// true

console.log('###############');
console.log(x <= 3);		// true
console.log(x <= 2);		// true
console.log(x <= 1);		// false

console.log('###############');
console.log(2 == 2);		// true
console.log(2 == "2");		// true
console.log(2 === "2");		// false


console.log('###############');
let condition1 = x < 1 || x > 1; // false || true => true
console.log(condition1);
let condition2 = x < 1 && x > 1; // false && true => false
console.log(condition2);


/*
Is used for comparing different values, often together with if-statements

if (condition) {
    Execute this code-block, if the condition is true
}
*/
console.log('############### if-statement ##############');
let age = 20;
if (age == 20) {
	console.log('Du är 20 år gammal.');
}

if (age != 77) {
	console.log('Du är in 77 år gammal.');
}

if (age < 30) {
	console.log('Du är yngre än 30 år.');
}

if (age > 18) {
	console.log('Du är ädre än 18 år.');
}


/*
if (condition1 || condition2) {
    Execute this code-block, if condition1 OR condition2 is true
}

if (condition1 && condition2) {
    Execute this code-block, if condition1 AND condition2 is true
}
*/
console.log('############### if-statement with && and || ##############');

age = 13;
let height = 140;

if (age >= 12 || height > 150) {
	console.log('Du är antingen +12 år gammal, ELLER längre än 150 cm.')
}


if (age >= 12 && height > 150) {
	console.log('Du är +12 år gammal, OCH längre än 150 cm.')
}



/*
if/else - statement

if (condition1) {
    Execute this code-block, if the condition is true
} else {
	Otherwise execute this code-block
}
*/
console.log('############### if/else-statement ##############');
age = 13;
if (age > 15) {
	console.log(' Du är äldre än 15 år');
} else {
	console.log(' Du är yngre än 15 år');
}



/*
if/elseif/else - statement

if (condition1) {
    Execute this code-block, if condition1 is true
} else if (condition2) {
	Execute this code-block, if condition2 is true
} else {
	Otherwise execute this code-block
}
*/
console.log('############### if/else if/else-satser ##############');

let time = 9;
let greeting = '';
if (time < 10) {
	greeting = 'God morgon';
} else if (time > 18) {
	greeting = 'God kväll';
} else {
	greeting = 'God dag';
}

console.log(greeting);