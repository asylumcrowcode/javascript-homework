let input = 12000.123;

let commaNumber = function (number) {
    let temp = String(number);
    let dotPos = temp.indexOf('.');
    let arr = [];
    for (let i = dotPos - 1; i >= 0; i -= 3) {
        if (i - 2 >= 0) {
            arr.unshift(temp.substring(i - 2, i + 1));
        } else {
            arr.unshift(temp.substring(0, i + 1));
        }
    }
    //arr.push(temp.substring(dotPos, temp.length));
    console.log(arr.join() + temp.substring(dotPos, temp.length));
}

commaNumber(input);
