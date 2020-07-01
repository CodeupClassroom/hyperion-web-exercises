(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ['Jack', 'Jill', 'Tom', 'Dom'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log('The number of element in the names array is ' + names.length + '.');

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (var i = 0; i < names.length; i++) {
        console.log('The name at index ' + i + ' is ' + names[i] + '.');
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log('The name in the name array are: ')
    names.forEach(function(name) {
        console.log('\t' + name);
    })

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    let elements = [1, 2, 3, 4, 5];

    var myArr = []

    let first = function (arr) {
        if (arr) {
            return arr[0];
        } else {
            return undefined;
        }
    }

    let second = function (arr) {
        if (arr) {
            return arr[1];
        } else {
            return undefined;
        }
    }

    let last = function (arr) {
        if (arr) {
            return arr[arr.length-1];
        } else {
            return undefined;
        }
    }

    console.log('The first element: ' + first(elements));
    console.log('The second element: ' + second(elements));
    console.log('The last element: ' + last(elements));
    console.log('The last element: ' + first(null));
    console.log('The second element: ' + second());
    console.log('The last element: ' + last(myArr));

})();