import fs from "fs";
const writeData = fs.createWriteStream("target.log");
writeData.write("Fauzan");
writeData.write("Ravi");
writeData.write("Daffa");
writeData.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
  console.log(data.toString())
  })