import {Console} from "console";
import fs from 'fs';

const file = fs.createWriteStream("console.log")
const log = new Console({
  stdout: file,
  stderr: file,
})

log.log("Hello World!")
log.error("Hello World!")

const person = {
  firstName:"Ahmad",
 lastName:"Fauzan",
}
log.table(person);