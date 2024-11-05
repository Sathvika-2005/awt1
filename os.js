
const os = require('os');

console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log("Free memory: " + os.freemem()); 
console.log("Total Memory: " + os.totalmem()); 
console.log("User Info: ", os.userInfo());
console.log("Network Interfaces: ", os.networkInterfaces());