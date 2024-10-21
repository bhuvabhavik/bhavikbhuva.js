
function makeTea(typeOfTea){
    return `making ${typeOfTea}`;
}

console.log(makeTea("chai"));

// function inside function

function orderTea(teaType){
    function confirmOrder(){
        return `Order Confirmed for Chai`;
    }
    return confirmOrder()
}
console.log(orderTea("ChaiChai"));

// arrow function

const calculateFunction = (price, quantity) => {
    return price*quantity
}
const calculateFunction1 = (price, quantity) =>  price*quantity; //inline

console.log(calculateFunction1(1000,51));

//
function makeChai(typeOfChai){
    return `chai prepared: ${typeOfChai}`;
}

function processTeaOrder(chaiFn){
   return chaiFn('Earl Grey')
}

let order = processTeaOrder(makeChai)
console.log(order);

//

function createTeaMaker(){
    return function(teatyp){
        return `making: ${teatyp}`;
    };
}
let teaMaker = createTeaMaker()
console.log(`teamaker: ${teaMaker("oolong")}`);


