
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




