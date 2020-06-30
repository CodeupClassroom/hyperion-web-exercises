let showMultiplicationTable = function(num) {
    for (let i=1; i<=10; i++) {
        console.log(num + " x " + i + " = " + (i * num));
    }
}

showMultiplicationTable(7);

for (let i=0;i<10;i++) {
    let random = Math.floor(Math.random()*181) + 20;
    if (random % 2 === 0) {
        console.log(random + " is even");
    } else {
        console.log(random + " is odd");
    }
}

for (let i=1; i<=9; i++) {
    let str = "";
    for (let j=1; j<=i; j++) {
        str += i;
    }
    console.log(str);
}

for (let i=100; i>0; i-=5) {
    console.log(i);
}