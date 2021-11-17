let input = 'oneTwoThree';

let wordCount = function (input) {
    if (typeof input === 'string') {
        let count = 1;
        for (let i = 0; i < input.length; i++) {
            if (input[i] === input[i].toUpperCase()) count++;
        }
        console.log('output: ' + count);
    }
}

console.log('input: ' + input);
wordCount(input);