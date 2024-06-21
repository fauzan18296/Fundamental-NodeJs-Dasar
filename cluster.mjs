import cluster from 'cluster';
import os from 'os';
import http from 'http';
import process from 'process';

if(cluster.isPrimary) {
  // jalankan worker
  console.log(`primary : ${process.pid}`)
  for(let i = 0; i<os.cpus().length; i++) {
    cluster.fork()
  }
  cluster.addListener("exit", (worker) => {
    console.log(`Worker-${worker.id} is exit`)
    cluster.fork()
  })
}
if(cluster.isWorker) {
  console.log(`worker : ${process.pid}`)
  const server = http.createServer((request, response) => {
    response.write(`Response from process ${process.pid}`)
    response.end()
    process.exit()
  })
  server.listen(3000)
}