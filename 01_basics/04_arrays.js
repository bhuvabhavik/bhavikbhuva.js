
let teaflavors = ["Green Tea","Black Tea","Oolong Tea"];

const firstTea = teaflavors[0];
console.log(firstTea);


let cities = ["London","Tokyo","Paris",'New York'];
const favouriteCity = cities[3]
console.log(favouriteCity);
cities.push("Berlin","Duggendorf");
cities[3] = "Sydney"
cities.pop() //DELETES THE LAST ELEMENT

const tech_cities = cities.copyWithin() //copy one to another // copy array
const new_cities = cities; //sooftcopy..original change this will change
const hard_cities = [...cities] //hard copy..original change this wont change
console.log(cities,tech_cities,new_cities)

//merge arrays

const mix_array = cities + teaflavors //not so good practice //type becomes string
const mix_array2 = [cities,teaflavors] 
const mix_array3 = cities.concat(teaflavors) //method 3
const length = mix_array.length
console.log(`mix arrays: ${mix_array}`);
console.log(mix_array2);

// IS LONDON EXIST IN CITIES?
let isExist = cities.includes("London")
console.log(isExist);


// loops while loop
let sum = 0;
let i=1;
while (i<=5) {
    sum+=i
    i++
   
    
}
console.log("while loop:")
console.log(sum);

//
let countdown = [];
let count = 5;

while (count > 0) {

    countdown.push(count);
    count--;
}
console.log(countdown)

// do while loop

// let teaCollection = [];
// let tea;
// do {
// tea = prompt(`Enter your favourite Tea. (Type "STOP" when you want to submit)`);

// if (tea !== "STOP") {
//     teaCollection.push(tea);
// }
// } while (tea !== "STOP");


// for loop

let multipliedNumber = []
let numbers = [2,4,6]

for (let index = 0; index < numbers.length; index++) {
    // takeNumber = numbers[index] * 2
    // multipliedNumber.push(takeNumber)

    multipliedNumber.push(numbers[index] * 3)
}
console.log(multipliedNumber);


// for of loop
const numberes = [1,2,3,4,5]
let smallNumberes = []

for (const num of numberes) {
    if (num === 4) {
        break;
    }     
    smallNumberes.push(num)
}

// for in loop

let citiesPolulation = {
    "Amsterdam" : 198000,
    "Paris" : 320000,
    "Berlin" : 2100000,
    "Gangstok" : 4322340,
    "Lublin" : 150000,
}

let cityNewPopulation = {} // empty object

// console.log(Object.values(citiesPolulation));
// console.log(Object.keys(citiesPolulation));

for (const city in citiesPolulation) {
// console.log(city);
// console.log(citiesPolulation[city]);

// creating key and value
if (city == "Berlin") {
    break;
}

cityNewPopulation[city] = citiesPolulation[city] //new key created
console.log("City new population");
console.log(cityNewPopulation);

}


// for each loop
let teatea = ["Green Tea","Black Tea","Chai","Oolong Tea","Herbal Tea"];
let availableTeas = []
teatea.forEach(tea => {
    console.log(tea);

    if (tea === "Chai") {
        return
    }
    availableTeas.push(tea)
    
});

console.log(`available Tea: ${availableTeas}`);
















