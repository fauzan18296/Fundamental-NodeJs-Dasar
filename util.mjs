import util from 'util';
const firstName = "Ahmad";
const lastName = "Fauzan";
console.log(`Hello ${firstName} ${lastName}`);
console.log(util.format("Hello %s %s", firstName, lastName));

const person = {
  firstName: "Ahmad",
  lastName: "Fauzan",
}
console.log(`Person : ${JSON.stringify(person)}`);
console.log(util.format("Person : %j", person));