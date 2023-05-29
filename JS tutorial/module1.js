// this is a comment

/* this 
is 
a 
multiline
comment
*/

console.log("%cHello World", "color:blue; font-size:40px");

var person = "Ralph"
var greetings = "Hi"

console.log(person, greetings)


//Tasks: Declaring Variables
var petDog = "Rex";
var petCat = "Pepper"
//console.log(petDog)
//console.log(petCat)
//console.log("My pet dog's name is: "+petDog)
//console.log("My pet cat's name is: "+ petCat)

var catSound = "purr"
var dogSound = "woof"
//console.log(petDog, "says", dogSound)
//console.log(petCat, "says", catSound)

catSound = "meow"
console.log(petCat, "now says", catSound)

// Arithmetic operators
//same as python 

console.log(4 + 5 * 20);

//Booleans
console.log(1 == 2)
console.log(2>1)

/* logical operators
Logical AND operator: && 

Logical OR operator: || 

Logical NOT operator: ! 

The modulus operator: % 

The equality operator: ==

The strict equality operator: ===

The inequality operator: !=

The strict inequality operator: !==

The addition assignment operator: += */

var meHungry = true
console.log("!meHungry", !meHungry)
console.log("5 == '5'", 5 == "5")
console.log("5 === '5'", 5 === "5")


// Tasks Advanced use of operators
var score = 8
console.log("Mid-level skills:", score>0 && score<10)

var timeRemaining = 0
var energy = 10
console.log("Game over:", timeRemaining == 0 || energy == 0)


var num1 = 2
var num2 = 5
var test1 = num1 % 2
var test2 = num2 % 2
var result1 = test1 == 0
var result2 = test2 == 2

console.log("Is", num1,"an even number?", result1)
console.log("Is", num2,"an even number?", result2)

// Conditional statements
/* 
if (condition) {
    code
} else if {
    code
} else {
    code
}
*/

var light = 'red'

// Switch statements for a lot of possible outcomes
switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready")
        break
    case 'red':
        console.log("Stop")
        break
    default:
        //this block runs if no condition matches
        console.log("idk")
        break
}

// Tasks conditional statements
var age = 10
if (age >= 65) {
    console.log("Old")
} else if (age < 65 && age >= 18) {
    console.log("not too old")
} else if (age < 18) {
    console.log("Young")
} else {
    console.log("weird")
}

var day = "Sunday"

switch(day) {
    case 'Monday':
        console.log("Do something")
        break
    case 'Sunday':
        console.log("It's Sunday")
        break
    default:
        console.log("no such day")
}

// For loop and while loop
// Exercise
for (var i = 1; i < 6; i++) {
    console.log(i)
}
console.log("Counting completed")

var counter = 6

while (counter > 0) {
    console.log(counter)
    counter -= 1
}
console.log("couting completed")

// Nested Loop
for (var week = 1; week < 5; week++) {
    for (var day = 1; day <=7; day++){
        console.log('week:', week, 'day:',day)
    }
}

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}