let number = ['khong', 'mot', 'hai', 'ba', 'bon', 'nam', 'sau', 'bay', 'tam', 'chin', 'lam'];
let tens = ['linh', 'muoi'];
let hundreds = ['tram']
let thousands = ['nghin']
let tenthousands = ['van']

// let input = 999099;
let input = 50000;

let speakNumber = function (input) {
    let temp = '';

    if (input < 0 || input > 1000000) {
        return -1;
    }

    // digit and tens
    let d = input % 10;
    if (input < 10) {
        temp += number[d];
        return temp;
    } else {
        let t = (input % 100 - input % 10) / 10;
        if (t < 1) {
            if (d !== 0) temp+= tens[0] + ' ' + number[d];
        } else {
            if (d !== 0) {
                if (d === 5) {
                    temp += tens[1] + ' ' + number[10];
                } else if (d !== 0) {
                    temp += tens[1] + ' ' + number[d];
                }
            } else temp += tens[1];
            
            if (t !== 1) temp = number[t] + ' ' + temp;
        }
    }
    if (input < 100) return temp;

    // hundreds
    let hd = (input % 1000 - input % 100) / 100;
    if (temp.length > 0) {
        temp = number[hd] + ' ' + hundreds[0] + ' ' + temp;
    }
    if (input < 1000) return temp;

    // thousnands
    let ts = (input % 10000 - input % 1000) / 1000;
    if (ts !== 0) temp = number[ts] + ' ' + thousands[0] + ' ' + temp;
    if (input < 10000) return temp;

    // ten thousands
    let tts = (input % 1000000 - input % 10000) / 10000;
    if (tts < 10) {
        temp = number[tts] + ' ' + tenthousands[0] + ' ' + temp;
    } else {
        if (tts % 10 !== 0) {
            if (tts % 10 === 5) {
                temp = tens[1] + ' ' + number[10] + ' ' + tenthousands[0] + ' ' + temp;
            } else if (tts % 10 !== 0) {
                temp = tens[1] + ' ' + number[tts % 10] + ' ' + tenthousands[0] + ' ' + temp;
            }
        } else temp = tens[1] + ' ' + tenthousands[0] + ' ' + temp;

        if (Math.floor(tts / 10) !== 1) temp = number[Math.floor(tts / 10)] + ' ' + temp;
    }

    return temp;
}

console.log('input: ' + input);
console.log('output: ' + speakNumber(input));