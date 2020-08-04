// want to do basic arithmetic in 4 functions
 // i.e. , if from another file we call math.add(2,2) - we should get back 4 (b/c 2 + 2 = 4)
const add = (x,y) => x + y;      // i.e. 2 + 2 = 4
const subtract = (x,y) => x - y; // i.e. 4 - 2 = 2
const multiply = (x,y) => x * y; // i.e. 4 * 3 = 12
const divide = (x,y) => x / y;   // i.e. 49 / 7 = 7

const name = "Casey";

module.exports = {add, subtract, multiply, divide, name};