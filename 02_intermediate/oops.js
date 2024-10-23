
let car = {
    make : "Toyota",
    model : "Innova",
    year : 2000,
    start : function(){
        return `\n\n ${this.make} ${this.model} started in ${this.year}`
    }
}

// console.log(car, car.start());


function person(name, age){
    this.name = name
    this.age = age
}

let john = new person("John",20);
// console.log(john.age);

// prototype and prototypal chains

function animal(type){
   this.type = type
}

animal.prototype.speak = function(type){
    return `${this.type} can speak.`
}

let dog = new animal("German shephard")
console.log(dog.speak());

class Car {
    constructor(make, model){
        this.make = make
        this.model = model
    }

    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

let innova = new Car("Toyota","Innova")
console.log(innova.start());


// encapsulation

class BankAccount{
    #balance = 0

    deposit(amount){
        this.#balance = this.#balance + amount
        return this.#balance
    }
    getBalance(){
        return `Balance: ${this.#balance}`
    }
}

let myAcc = new BankAccount();
myAcc.deposit(10000);
myAcc.deposit(10000);

console.log(myAcc.getBalance());


// abstraction

class CoffeeMachine {
    start(){
        // call database
        // filter value
        return `Starting the  machine.`
    }
    brewCoffee(){
        // complex calculations
        return `Brewing Coffee`
    }
}

let myMachine = new CoffeeMachine()
console.log(myMachine.start());
console.log(myMachine.brewCoffee());


// polymorphism

class Bird {
    fly(){
        return `Flying...`
    }
}

class Penguins extends Bird {
    fly(){
        return `Penguins can't fly..`
    }
}
 let bird = new Bird()
 let penguin = new Penguins()

 console.log(bird.fly());
 console.log(penguin.fly());


 // static method

 class Calculator{
    static add(parameter1, parameter2){
        return parameter1 + parameter2
    }
 }
// let miniCalc = new Calculator()
//  console.log(miniCalc.add(10,20)); not allowed for static method

console.log(Calculator.add(100,200)); // for static method

// getters and setters

class Employee{
    #salary;
    constructor(name, salary){
        this.name = name
        this.#salary = salary
    }

    get salary(){
        return this.#salary
    }
    
    set salary(salary){
        if(salary < 0){
            console.error("Invalid Salary.");
        }
        else{
            this._salary = salary
        }   
    }



}
let employee1 = new Employee("Peter", 100000)
console.log(employee1.name + " " + employee1.salary);



 
 











