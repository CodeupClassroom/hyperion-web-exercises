let fibonacci = function(num) {

    let output = [0,1];
    let i = output.length;
    while (i<num) {
        output.push(output[output.length - 2] + output[output.length - 1]);
        i++;
    }
    return output;
}

console.log(fibonacci(9));