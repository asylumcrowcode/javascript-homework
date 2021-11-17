let arr = [1, 2, 3, 4, 5, 6];

let randomElement = function (arr) {
    let randomIndex = Math.floor(Math.random() * (arr.length - 1));
    return arr[randomIndex];
}

console.log(randomElement(arr));