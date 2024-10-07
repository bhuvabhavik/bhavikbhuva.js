const accountId = 1234
let accountEmail = "contact@bhavikbhuva.com"
var accountPassword = "321"
accountCity = "Berlin"
// accountState;   

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// accountId = 1 // cant change const variable
accountEmail = "123@gmail.com" //allowed
accountPassword = "asdf" //allowed
accountCity = "Frankfurt" //allowed
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);


console.table([accountId,accountEmail,accountPassword,accountCity])

