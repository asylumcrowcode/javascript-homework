let input = 5;

let factorial = function (input) {
    if (input < 0) return -1;
    else if (input === 0) return 1;
    else {
        return input * factorial(input - 1);
    }
}

console.log('input: ' + input);
console.log('output: ' + factorial(input));