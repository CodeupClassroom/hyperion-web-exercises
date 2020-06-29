// let bottles = 99;
//
// while (bottles > 0) {
//     console.log(bottles + " bottles of beer on the wall");
//     console.log(bottles + " bottles of beer");
//     console.log("Take 1 down");
//     console.log("Pass it around");
//     bottles--;
//     console.log(bottles + " bottles of beer on the wall");
//     console.log(" ");
// }

// let x = Math.floor((Math.random() * 10) + 1);
// console.log(x);
// alert("Let's play a guessing game");
// let guess;
// do {
//     guess = prompt("I chose a number between 1 and 10. Can you guess what it is?");
//     if (guess != x) {
//         alert("No, that wasn't it.");
//         continue;
//     } else {
//         alert("You guessed the number!!");
//         break;
//     }
// } while (true) ;

// let x = 1;
// while (x <= 10) {
//     console.log(x);
//     x++;
// }
//
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let monkeys = 9; monkeys > 0; monkeys--) {
//     console.log(monkeys + " little monkeys jumping on the bed");
//     console.log("one fell off and bonked his head");
//     console.log("Momma called the doctor and the doctor said");
//     console.log("No more monkeys jumping on the bed!");
//     console.log(" ")
// }

// for (let i=1;i<=20;i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

let multiply = function(a,b) {
    let answer = 0;
    for (let i = 0;i<b;i++) {
        answer += a;
    }
    return answer;
}

console.log(multiply(6, 7));

let addition = function(a,b) {
    let answer = a;
    for (let i = 0; i<b;i++) {
        answer++;
    }
    return answer;
}

console.log(addition(3,4));

console.log("We are done")



