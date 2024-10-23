let computer = {
    cpu : 12,
    ram : 16,
}
let lenovo = {
    screen : "HD",
    __proto__ : computer
}
let tomHardware = {

}
// console.log(lenovo.computer);
// console.log(lenovo.__proto__);

//

let genericCar = {
    tyres : 4,
}

let tesla = {
    driver : "AI",
}

Object.setPrototypeOf(tesla,genericCar)
Object.getPrototypeOf(tesla,genericCar)

console.log(tesla); // we can access here all props of generic car
console.log( `tesla`,Object.getPrototypeOf(tesla)); // we can access here all props of generic car


