let input = 1120000;

let shortenNumber = function (number) {
    if (Math.floor(number / 1000000000) > 0) {
        let temp = Math.floor(number / 1000000000);
        let temp2 = Math.floor((number - temp * 1000000000) / 10000000);
        console.log(temp + 'B' + temp2);
    } else if (Math.floor(number / 1000000) > 0) {
        let temp = Math.floor(number / 1000000);
        let temp2 = Math.floor((number - temp * 1000000) / 10000);
        console.log(temp + 'M' + temp2);
    } else if (Math.floor(number / 1000) > 0) {
        let temp = Math.floor(number / 1000);
        let temp2 = Math.floor((number - temp * 10000) / 10);
        console.log(temp + 'K' + temp2);
    }
}

shortenNumber(input);