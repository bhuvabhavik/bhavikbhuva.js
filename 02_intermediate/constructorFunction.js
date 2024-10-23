
function person(name, age){
this.name = name
this.age = age
}
 
function car(make, model){
    this.make = make
    this.model = model
}

let myCar = new car("Toyota","Fortuner");
let herCar = new car("Toyota","Innova");
let herDadsCar = new car("TATA","Safari");

console.log(myCar,herCar,herDadsCar);

function tea(type){
    this.type = type
    this.describe = function(){
        return `This is a cup full of ${this.type}`
    }
}

let myTea = new tea("Lemon Tea");
console.log(myTea.describe());


// 
function animal(species){
    this.species = species;
}
animal.prototype.sound = function(){
    return `${this.species} makes a sound.`
}

let zebra = new animal("Zebras");

console.log(zebra.sound())

//

function drink(name){
    if (!new.target) {
        throw new Error("Drink must be called with the new keyword.")
    }
  this.name = name
}

let tea = new drink("Mojito")
let coffee = drink("Capuchinoo")


