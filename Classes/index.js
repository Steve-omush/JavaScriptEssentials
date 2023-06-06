//use this keyward to reference functions and variables associated with a particular class
//use a constructor. special function that gets called when object is created 
class Person {
    name = 'Steve';
    sayHi() {
        console.log(`${this.name} says Hi!`);
    }
}

const p = new Person();
p.name;
p.sayHi();


//using constructors
class AnotherPerson {
    constructor (name){
        this.name = name;
    }
    sayHi () {
        console.log(`${this.name} says Hi!`);
    }
}
const j = new AnotherPerson('John');
j.name;
j.sayHi()

//another example
class Car {
    constructor (name, year, model) {
        this.name = name;
        this.year = year;
        this.model = model;
    }
    displayCar () {
        console.log(`${this.name} ${this.model} was made in ${this.year}`);
    }
}
const car1 = new Car('Ford',2023,'Escape');
const car2 = new Car('Audi',2023,'TT');
const car3 = new Car('BMW',2023,'XM');

car1.displayCar();
car2.displayCar();
car3.displayCar();