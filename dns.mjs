// dns(DomainNetworkServer)
import dns from 'dns/promises';
const address = await dns.lookup("asaf-fashion.vercel.app");
console.log(address.address)
console.log(address.family)