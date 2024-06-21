// cara async di node js tanpa mengubah type file nya yaitu .mjs
function samplePromise() {
  return Promise.resolve("value: Fauzan")
}
async function run() {
  const name = await samplePromise();
  console.log(name)
}
run()