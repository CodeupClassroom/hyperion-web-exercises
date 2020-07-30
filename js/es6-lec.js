"use strict";

(() => {

    /**
     * "Hey David, what's an ECMA?"
     */

    // History time! JavaScript was created by Brendan Eich in 1995 during his time at Netscape Communications. Developed in 10 days, Mocha was created to help keep Netscape competitive with Microsoft's Internet Explorer. As time went on, the language has been maintained by two forces: Oracle (the current owners of JavaScript), and The European Computer Manufacturers' Association (ECMA). ECMAScript is a standardization of JavaScript. The first specification of ECMAScript came in 1997, and was updated yearly until ECMAScript 3. ECMAScript 4 was an abandoned update, with ECMAScript 5 coming out in 2009. The largest changes came in 2015 with ECMAScript 6, and since 2015, ECMA has regularly updated the language yearly, but with much more incremental changes.

    /**
     * "Neat, now what can I do with these updates?"
     */

    //Firstly, variables are a bit different.

    var oldVariables = "jim";

    let newVariables = "jim";

    // While an update to the keyword to declare variables seems minor, it can have some long reaching benefits, namely, block scoping.

    // do {
    //     var password = prompt("What's the password?");
    //     if(password.toLowerCase() === "securepassword") {
    //         break;
    //     }
    // } while(true);
    //
    // console.log(password);

    // do {
    //     let passcode = prompt("What's the password?");
    //     if(passcode.toLowerCase() === "bestpasscode") {
    //         break;
    //     }
    // } while(true);
    //
    // console.log(passcode);

    // Notice how I am able to access the value of password, but not passcode. This allows me to keep a variable scoped to a block of code from being accessed globally.

    // Also, we have const. We touched on it before, but the benefits of having a const is that we can't change the value of our constants.

    const theAnswer = 42;

    // theAnswer = "Fishing";

    // What if we set a const to an object, can we update the object?

    const gary = {name: "Gary"};
    gary.age = 54;

    // console.log(gary);

    // Yes we can!

    // Constants can also be used as a collection.

    const house = [{name: "Wilma", role: "Mother", gender: "F"}, {name: "Fred", role: "Father", gender: "M"}, {name: "Pebbles", role: "Daughter", gender: "F"}, {name: "Dino", role: "Pet", gender: "M"}];

    house.push({name: "Bam Bam", role: "Son-In-Law", gender: "M"});
    // house.push("Jimby");

    // console.log(house);
    // house.shift();

    // for(let person of house) {
    //     console.log(person.name);
    // }

    // While I cannot change the value of an array or object declared as a constant, I can update, and add to them.

    // Let's roll back a second. For/Of loops are also now a thing.

    // We declared them like so

    // let iterable = [1,2,3,4];
    // for(const geoff of iterable) {
    //     console.log("The value of element during this iteration is: " + geoff + ".");
    // }

    // We can also use template strings now...

    // for(var person of house) {
    //     console.log(`${person.name} is the ${person.role} of the family. ${Math.floor(Math.random() * 8)}`);
    // }

    // document.getElementById("snarky-text").innerHTML = `<h2>HELLO FROM JAVASCRIPT, ${newVariables}!</h2>`;

    // Functions can be written faster now.

    function addTwoNumbers(n1,n2) {
        return n1 + n2;
    }

    // console.log(addTwoNumbers(3, 4));

    let add = (n1, n2) => n1 + n2;

    // console.log(add(3, 4));

    // With an arrow function, we don't need the function keyword, and we only need braces for our multiple line functions, and returning objects.

    const makeABasketballMan = name => {
        return {name, heightInInches: 84}
    };

    // console.log(makeABasketballMan("Saul Tallman").name);

    // Oh yeah, it's also easier to set the key value pairs of objects with variables now.

    // Before:

    var riddles = [
        {prompt: "What is the air speed velocity of an unladen swallow?", ans: "What do you mean? African or European swallow?"},
        {prompt: "What is your favorite color?", ans: "Blue"},
        {prompt: "What is the capital of Assyria?", ans: "Assur"}
    ];

    var rid = riddles[Math.floor(Math.random() * 2)];

    // var kName = prompt("What is your name?");
    // var quest = prompt("What is your quest?");
    // var canPass = prompt(rid.prompt).toLowerCase() === rid.ans.toLowerCase();

    // var knight = {
    //     name: kName,
    //     quest: quest,
    //     canPass: canPass
    // };
    //
    // // Now
    //
    // let newKnight = {
    //     name: kName,
    //     quest,
    //     canPass
    // };

    // console.log(newKnight.name, newKnight.canPass);

    // We can also use object destructuring:

    const flintstones = [{name: "Wilma", role: "Mother", gender: "F"}, {name: "Fred", role: "Father", gender: "M"}, {name: "Pebbles", role: "Daughter", gender: "F"}, {name: "Dino", role: "Pet", gender: "M"}];

    flintstones.push({name: "Bam Bam", role: "Son-In-Law", gender: "M"});

    let rando = Math.floor(Math.random() * flintstones.length);
    let {name, role} = flintstones[rando];

    name = "Ymir";
    // console.log(flintstones[rando].name);
    // console.log(name);
    // console.log(role);

    // Now I can get the name and role of an object from my house array, and have the properties declared as variables!

    // Also, making exponents is easier now.

    // Before
    // console.log(Math.pow(4, 2));

    // Now
    // console.log(4 ** 2);

})();