let input = 1111.11;

let shortenNumber = function (number) {
    if (Math.floor(number / 1000000000) > 0) {
        let temp = Math.floor(number / 1000000000);
        let temp2 = Math.floor((number - temp * 1000000000) / 1000000);
        temp2 = String(temp2);
        while (temp2[temp2.length - 1] === '0') {
            temp2 = temp2.substring(0, temp2.length - 1);
        }
        if (temp2 === '') {
            console.log('output: ' + temp + 'B');
        } else {
            console.log('output: ' + temp + '.' + temp2 + 'B');
        }
    } else if (Math.floor(number / 1000000) > 0) {
        let temp = Math.floor(number / 1000000);
        let temp2 = Math.floor((number - temp * 1000000) / 1000);
        temp2 = String(temp2);
        while (temp2[temp2.length - 1] === '0') {
            temp2 = temp2.substring(0, temp2.length - 1);
        }
        if (temp2 === '') {
            console.log('output: ' + temp + 'M');
        } else {
            console.log('output: ' + temp + '.' + temp2 + 'M');
        }
    } else if (Math.floor(number / 1000) > 0) {
        let temp = Math.floor(number / 1000);
        let temp2 = Math.floor((number - temp * 1000));
        temp2 = String(temp2);
        while (temp2[temp2.length - 1] === '0') {
            temp2 = temp2.substring(0, temp2.length - 1);
        }
        if (temp2 === '') {
            console.log('output: ' + temp + 'K');
        } else {
            console.log('output: ' + temp + '.' + temp2 + 'K');
        }
    }
}

console.log('input: ' + input);

shortenNumber(input);