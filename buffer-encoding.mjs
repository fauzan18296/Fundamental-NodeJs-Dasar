const buffer = Buffer.from("Ahmad Fauzan", "utf8");

console.info(buffer.toString())
console.info(buffer.toString("hex"))
console.info(buffer.toString("base64"))

const bufferBase64 = Buffer.from("QWhtYWQgRmF1emFu", "base64")
console.log(bufferBase64.toString("utf8"))