let a = [1, 2, 3, 4, 5, 6, 7];
let b = [2, 3, 0, 6, 7, 8, 10];

let missingElement = function (a, b) {
    let temp = [];
    b.forEach(element => {
        if (a.indexOf(element) === -1) {
            temp.push(element);
        }
    });

    return temp;
}


console.log('input: ');
console.log('a: ' + a);
console.log('b: ' + b);
console.log('output: ' + missingElement(a, b));