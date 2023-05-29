/*
function in js

function myfunc() {
    code
}
*/

//e.g.

var array = ["one", "two", "three", "four", "five"]
function iterateList(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

iterateList(array)

// Tasks
function letterFind(word, match) {
    for (i = 0; i< word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('No match found at', i)
        }
    }
}

letterFind("test", "t")

// objects (it's like a JSON type of data inside an objetct)
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
    text: function(t) {
        console.log(t)
    }
}
//adding property into a object using dot notation and ";" at the end of the statement. "origin" is the key of the property, "USA" is the property value
table.origin = "USA";
//alternatively, we can use bracket notation
table["height"] = "2ft";

console.log(table.legs)
console.log(table["color"])
table.text("gray")
console.log(table)

//the bracket notation can evaluate expression

var arrKeys = ["legs", "color", "priceUSD", "origin", "height"]
for (i = 0; i < arrKeys.length; i++) {
    console.log(table[arrKeys[i]])
}

// array is a javascript object, and there's push and pop method
arrKeys.push("apple")
console.log(arrKeys)
arrKeys.pop()
console.log(arrKeys)

//js built-in Math object
var number = Math.random()
console.log(number * 10)

// Error Handling
/* syntax
try {
    code that might have error
} catch(err) {
    console.log(err) print out the error
}
console.log("the code keeps running")
*/

// Exercise: Error Prevention
function addTwoNums(a, b) {
    try {
        console.log(a+b)
        if (typeof a != "number") {
            throw new ReferenceError("this is not a number")
        } else if (typeof b != "number") {
            throw new ReferenceError("this is not a number")
        }
    } catch(err) {
        console.log(err)
        console.log("the code keeps running")
    }
}

addTwoNums(5, "5")
addTwoNums(5, 5)


// Exercise: Defensive Programming: Defensive programming is all about assuming that all the arguments a function will receive are of the wrong type,  the wrong value or both.
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2
    var condition2 = typeof(match) == 'string' && match.length == 1

    if (condition1 && condition2) {
        for(i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
    }
    
    }else {
        console.log("Please pass correct arguments to the function.")
    }
}

//failling
letterFinder("cat", "cc")
//success
letterFinder("cat", "c")

// --------------------------------------
var str = "Hello";
console.log(str.match("jello"))