import { URL } from "url";
  const pzn = new URL("https://www.programmerzamannow.com/belajar?kelas=nodejs");

pzn.host = 'www.khannedy.com';
pzn.searchParams.append("status", "premium");

  console.log(pzn.toString());
  console.log(pzn.protocol);
  console.log(pzn.host); 
  console.log(pzn.href);
  console.log(pzn.pathname);
  console.log(pzn.searchParams);