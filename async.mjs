function samplePromise() {
  return Promise.resolve("value: Fauzan")
}
const name = await samplePromise();
console.log(name)