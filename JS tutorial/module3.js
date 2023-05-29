// OOP
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn)
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var FirstTrain = new Train("red", "false")
console.log(FirstTrain)
FirstTrain.toggleLights();
FirstTrain.lightsStatus()
FirstTrain.getSelf();
FirstTrain.getPrototype()


class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn)
        this.passengers = passengers
        this.highSpeedOn = highSpeedOn
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn
        console.log("High speed status", this.highSpeedOn)
    }
}

var train2 = new HighSpeedTrain(200, false, "green", false)
train2.toggleHighSpeed()

// Destructuring
//create a array
var arr = [1,2,3,4,5]
//store the array into a variable arr
var [one, two, three,,five] = arr
console.log(one)
console.log(arr)

var person = {
    name: 'John',
    lname: 'Doe',
    age: 30
}
var {name, lname, age} = person
person = {...person, lname: 'dd'}
console.log(lname)

//Object.keys
console.log(Object.keys(person))

//Object.values
console.log(Object.values(person))

//Object.entries
console.log(Object.entries(person))

// template literal (backticks)
var one = `Hello`
var two = `World`
//can do multilines
var three = `hehe
hehe
he!!`
console.log(`${one} ${two} ${three}`)
// can do expression evaluation
console.log(`${1 + 1 * 2} = 3`)

//for of loop
// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (let item of dairy) {
        console.log(item)
    }
}
logDairy()

// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (let key of Object.keys(bird)) {
        console.log(key, ":", bird[key])
    }
}

birdCan()

// Task 3

function animalCan() {
    for (let prop in bird) {
        console.log(`${prop}:${bird[prop]}`)
    }
}

animalCan()

// spread and rest operator
var one = [1,2,3]
var two = [4,5,6]
var three = [...one, ...two]
console.log(three)

var string1 = "Hello"
var arrstring = [...string1]
console.log(arrstring)

//copying
const car1 = {
    speed: 200,
    color: 'yellow'
}

const car2 = {...car1}
console.log(car1.speed, car2.speed)

var result;
console.log(result)
result = 7;

//Event listener
var h1 = document.querySelector('h1')


var arr = [
        'Example Domain',
        'First Click',
        'Second Click',
        'Third Click'
    ]

function handleClicks() {
    switch(h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1]
            break
        case arr[1]:
            h1.innerText = arr[2]
            break
        case arr[2]: 
            h1.innerText = arr[3]
            break
        default:
            h1.innerText = arr[0]

    } 
    }

h1.addEventListener('click', handleClicks) 

