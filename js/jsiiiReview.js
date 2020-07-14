// Assessment Review Arrays and Objects

// Welcome to your JS 3rd Assessment Review. This will include some things from the previous assessments, as well as Array and Object manipulation. Below are some practice questions for you to get started.

// TODO: Write a function named 'typeOfValue' that takes in a value and returns its type.
// typeOfValue("hello") // "string"
// typeOfValue(123) // "number"
// typeOfValue([]) // "object"
// typeOfValue([4,5,6]) // "object"

// TODO: Write a function 'isPositive' that takes in a number and returns true or false based on whether the input is positive.
// isPositive(2) // true
// isPositive(-4) // false
// isPositive(0) // false

// TODO: Write a function 'removeElement' that takes in an array and a value, and returns an Array with the first instance of the indicated value removed.
// removeElement([1,2,3,4,5], 4) // returns [1,2,3,5]
// removeElement([2,2,4,4,5], 2) // returns [2,4,4,5]
// removeElement([10], 10) // returns []

// TODO: Write a function 'sumOfNumbers' that takes in an array of numbers and returns the sum of all values.
// sumOfNumbers([1,2,3,4,5]) // 15
// sumOfNumbers([-1, 15]) // 14

// TODO: Write a function 'evensIndex' that takes in an array of numbers and returns an array containing the index values of all even numbers.
// evensIndex([1,2,3,4,5,6]) // returns [1,3,5]
// evensIndex([3,7,11,12]) // returns [3]
// evensIndex([5,5,7,13]) // returns []

// TODO: Write a function 'stringToArray' that takes in a comma separated list and returns it as an array.
// stringToArray("red,orange,yellow,green,blue") // returns ['red','orange',
// 'yellow','green','blue']
//
// stringToArray("1,2,3") // returns ['1','2','3']
// stringToArray("dog") // returns ['dog']
// Given the following array of objects, write a function 'findUsers' that returns an Array of usernames.
//     var myMac = {};
// myMac.users = [
//     {
//         username: "sophie",
//         id: 1
//     },
//     {
//         username: "vivian",
//         id: 2
//     },
//     {
//         username: "david",
//         id: 3
//     }
// ];
//
// findUsers(myMac.users) // returns ['sophie','vivian','david']

// TODO: Write a function 'addRole' that accepts the array of objects, then adds the property 'role' to each object with a value of 'instructor.' The results should look like this:
// addRole("instructor");
//
// [
//     {
//         username: "sophie",
//         id: 1,
//         role: "instructor"
//     },
//     {
//         username: "vivian",
//         id: 2,
//         role: "instructor"
//     },
//     {
//         username: "david",
//         id: 3,
//         role: "instructor"
//     }
// ];
//

// TODO: Write a function 'countLetters' that takes in a string and a character, and counts the number of instances of that character in the string.
// countLetters("banana", "a") // returns 3
// countLetters("Bob", "b") // returns 2
// countLetters("javascript", "x") // returns 0
// ####BONUS:
//
// TODO: Write a function 'countAll' that takes in an array of strings and returns an array with the count of a character for each string. You may be able to use your countLetters function here.
// countAll(["banana", "html", "java"], "a") // returns [3,0,2]
// countAll(["push", "your", "commits"], "u") // returns [1,1,0]