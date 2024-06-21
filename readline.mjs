import process from "process";
import readline from "readline/promises";

//? readline yang bukan promise
// const input = readline.createInterface({
//   input:process.stdin,
//   output:process.stdout,
// })

// input.question("Siapa nama anda:", (name) => {
//   console.log(`hello namaku ${name}`)
//   input.close();
// })

//? readline yang menggunakan Promise
const input = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
  })

const name = await input.question('Siapa namamu ?')
  console.log(`Halo nama saya ${name}`);
