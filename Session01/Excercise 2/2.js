let min = 10;
let max = 100;

let randomRange = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomRange(min, max));