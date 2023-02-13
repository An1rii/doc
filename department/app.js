//
// function Person (pName, pAge) {
//     this.name = pName;
//     this.age = pAge;
//     this.personInfo = function () {
//         console.group (`${this.name} info:`);
//         console.log ("Your name is: " + this.name);
//         console.log ("Your age is: " + this.age);
//         console.groupEnd ();
//     };
// };
//
// function Car (pModel,pYear) {
//     this.model = pModel;
//     this.year = pYear;
//     this.getCarInfo = function () {
//         console.group (`${this.model} info:`);
//         console.log ("Model of your car: " + this.model);
//         console.log ("Year of issue: " + this.year);
//         console.groupEnd();
//     };
//     this.ownerCar = function (person) {
//         console.log(person.name + " is the owner of the " + this.model + " " + this.year);
//     };
// };
//
// const owner = new Person (
//     pName = prompt('what is your name?'),
//     pAge = prompt('how old are you?')
// );
// const myCar = new Car(
//     pModel = prompt('What car do you own?'),
//     pYear = prompt('what year is your car?')
// );
// const owner1 = new Person (
//     pName = prompt('what is your name?'),
//     pAge = prompt('how old are you?')
// );
// const myCar1 = new Car(
//     pModel = prompt('What car do you own?'),
//     pYear = prompt('what year is your car?')
// );
//
//
//
//
//
// owner1.personInfo()
// myCar1.getCarInfo()
// myCar1.ownerCar(owner1)
// owner.personInfo();
// myCar.getCarInfo();
// myCar.ownerCar(owner);
class Person {
    constructor(name, age) {
        if (!name) throw new Error("Name cannot be empty");
        if (age < 18) throw new Error("Age must be greater than or equal to 18");

        this.name = name;
        this.age = age;
    }
}


class Car {
    constructor(make, model, year, owner) {
        if (!make) throw new Error("Make cannot be empty");
        if (!model) throw new Error("Model cannot be empty");
        if (!year) throw new Error("Year cannot be empty");
        if (!owner) throw new Error("Owner cannot be empty");

        this.make = make;
        this.model = model;
        this.year = year;
        this.owner = owner;
    }


    displayData() {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Owner: ${this.owner.name}`);
    }
}


class Garage {
    constructor(owner, cars = []) {
        if (!owner) throw new Error("Garage must have an owner");

        this.owner = owner;
        this.cars = cars;
    }


    getGarageOwner() {
        return this.owner;
    }


    getCars() {
        return this.cars;
    }
}


const person1 = new Person("John Doe", 25);
const person2 = new Person("Jane Doe", 30);

const car1 = new Car("Tesla", "Model S", 2020, person1);
const car2 = new Car("BMW", "i8", 2018, person1);
const car3 = new Car("Toyota", "Camry", 2019, person2);

const garage1 = new Garage(person1, [car1, car2]);
const garage2 = new Garage(person2, [car3]);


console.log("Cars:")
car1.displayData();
console.log("\n");
car2.displayData();
console.log("\n");
car3.displayData();
console.log("\n");

console.log("Garages:")
console.log(`Garage 1 Owner: ${garage1.getGarageOwner().name}`);
console.log(`Garage 1 Cars: ${garage1.getCars().map(c => c.model).join(", ")}`);
console.log("\n");
console.log(`Garage 2 Owner: ${garage2.getGarageOwner().name}`);
console.log(`Garage 2 Cars: ${garage2.getCars().map(c => c.model).join(", ")}`);














