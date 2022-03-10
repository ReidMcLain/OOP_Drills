const person1 = {
    name: "Reid",
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    },
}

person1.name
person1.sayHello();

const person2 = {
    name: "William",
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}

person2.name
person2.sayHello();

const person3 = {
    name: "Sage",
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}

person3.name
person3.sayHello();

const person4 = {
    name: "Noah",
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}

person4.name
person4.sayHello();

const person5 = {
    name: "Landon",
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}

person5.name
person5.sayHello();

function Person(name, city, age) {
    this.name = name; //creating a property on the object called name.
    this.city = city; //creating a property on the object called city.
    this.age = age; //creating a property on the object called age.
}

const person6 = new Person("Chad", "Montevallo", 28); //creating and instance of the class Person

Person.prototype.sayHello = function () {
    console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`)
}

person6.sayHello();

class ClassyPerson {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }

    sayHello() { //this is a method
        console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`)
    }
}

const person7 = new ClassyPerson("John", "Birmingham", 28);
person7.sayHello();


//Inheritance

class Vehicle {
    constructor(manufactor, type, numOfWheels) {
        this.manufactor = manufactor;
        this.type = type;
        this.numOfWheels = numOfWheels;
    }

    aboutVehicle() {
        console.log(`This is a ${this.manufactor} ${this.type}. It has ${this.numOfWheels} wheels.`);
    }
}

const vehicle = new Vehicle("BMW", "325i", 4);
vehicle.aboutVehicle();

class Truck extends Vehicle {
    constructor(manufactor, type, numOfWheels, numOfDoors, hasBed) {
        super(manufactor, type, numOfWheels);
        this.numOfDoors = numOfDoors;
        this.hasBed = hasBed;
    }
    aboutVehicle() {
        {
            console.log(`this is a ${this.manufactor} ${this.type}. It has ${this.numOfWheels} wheels. It has a truckbed and has ${this.numOfDoors} doors.`);
        }
    }

}

const truck = new Truck("Ford", "Tundra", 4, 4, true);
truck.aboutVehicle()

class Sedan extends Vehicle {
    constructor(manufactor, type, numOfWheels, size, mpg) {
        super(manufactor, type, numOfWheels);
        this.size = size;
        this.mpg = mpg;
    }
}

const sedan = new Sedan("Toyota", "Camry", 4, "medium", 30);

class Motorcycle extends Vehicle {
    constructor(manufactor, type, numOfWheels, hasHandleBars, hasDoors) {
        super(manufactor, type, numOfWheels);
        this.hasHandleBars = hasHandleBars;
        this.hasDoors = hasDoors;
    }
}

const motorcycle = new Motorcycle("Harley Davidson", "motorcyle", 2, true, false);