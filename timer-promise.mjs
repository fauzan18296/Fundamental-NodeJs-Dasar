import timers from 'timers/promises';
//? library setTimeout adalah library untuk mengeluarkan hasil tanpa diulang yaitu sampai waktu yang ditentukan telah terselesaikan
// console.log(new Date())
// const name = await timers.setTimeout(5000, "Hai Fauzan✌");
// console.log(new Date())
// console.log(name)

//? sedangkan library setInterval adalah library untuk mengeluarkan hasil dengan waktu yang ditentukan tetapi secara berulang-ulang 
for await(const startTime of timers.setInterval(1000, "ignored")){
  console.log(new Date())
};

