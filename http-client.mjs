import https from 'https';
const endpoint = "https://eo2ubsqhg6b01e0.m.pipedream.net"
const request = https.request(endpoint, {
  method: "POST",
  headers: {
    "Content-Type" : "application/json",
    "Accept" : "application/json",
  }
}, (response) => {
  response.addListener("data", (data) => {
    console.log(`Receive Data : ${data.toString()}`)
  })
})
const body = JSON.stringify({
  firstName : "Ahmad",
  lastName : "Fauzan",
})
request.write(body)
request.end()