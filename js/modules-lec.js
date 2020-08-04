import defaultExport from './data.js';
// Let's try to 'require' the data from the data.js file
  // so that we can access its contents here

// ******** REQUIRE ******** //
// const exportedStuff = require('./data.js');

// ******** IMPORT ******** //


console.log(defaultExport.data.theAnswer);
console.log(defaultExport.data.scarn);
// console.log(defaultExport.instructor.hackingExploits);
// console.log(defaultExport.config.mapboxSecret);

// ******** REQUIRE ******** //
// const maths = require('./math.js');

// ******** IMPORT ******** //
// console.log(maths.add(2, 2));      // should == 4
// console.log(maths.subtract(4, 2)); // should == 2
// console.log(maths.multiply(4, 3)); // should == 12
// console.log(maths.divide(49,7));   // should == 7
// console.log(maths.name);           // should .... *maybe* be "Casey"?

