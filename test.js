const { calculateLescoBill } = require('./index');

console.log('Testing Protected (199 units):', calculateLescoBill(199, true));
console.log('Testing Unprotected (201 units):', calculateLescoBill(201, false));
