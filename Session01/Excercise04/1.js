let number = ['khong', 'mot', 'hai', 'ba', 'bon', 'nam', 'sau', 'bay', 'tam', 'chin', 'lam'];
let tens = ['linh', 'muoi'];
let hundreds = ['tram']
let thousands = ['nghin']
let tenthousands = ['van']

// let input = 999099;
let input = 105;

let speakNumber = function (input) {
    let temp = '';

    if (input < 0 || input > 1000000) {
        return -1;
    }

    //digit
    let n = input % 10;
    if (input < 10) {
        temp += number[n];
        return temp;
    } else {
        if (input % 100 >= 20) {
            if (n === 0) { temp += tens[1]; }
            else if (n === 5) { temp += tens[1] + ' ' + number[10]; }
            else { temp += tens[1] + ' ' + number[n]; }
        } else if (input % 100 >= 10 && input % 100 < 20) {
            if (n === 0) { temp += tens[1]; }
            else if (n === 5) { temp += number[10]; }
            else { temp += tens[1] + ' ' + number[n]; }
        } else {
            if (n === 0) { }
            else if (n === 5) { temp += tens[0] + ' ' + number[n]; }
            else { temp += tens[0] + ' ' + number[n]; }
        }
    }

    //tens
    let t = input % 100 - input % 10;
    if (t >= 20) {
        temp = number[t / 10] + ' ' + temp;
    }
    if (input < 100) return temp;

    //hundreds
    let hd = input % 1000 - input % 100;
    if (input % 100 > 0 || hd > 0) temp = number[hd / 100] + ' ' + hundreds[0] + ' ' + temp;
    if (input < 1000) return temp;

    //thousands
    let ts = input % 10000 - input % 1000;
    if (ts >= 1000) temp = number[ts /1000] + ' ' + thousands[0] + ' ' + temp;
    if (input < 10000) return temp; 

    //ten thousands
    let tts = input % 1000000 - input % 10000;
    if (tts >= 100000) {
        if (tts >= 200000) {
            if (tts % 100000 / 10000 === 0) { temp = number[Math.floor(tts / 100000)] + ' ' + tens[1] + ' ' + tenthousands[0] + ' ' + temp; }
            else if (tts % 100000 / 10000 === 5) { temp = number[Math.floor(tts / 100000)] + ' ' + tens[1] + ' ' + number[10] + ' ' + tenthousands[0] + ' ' + temp; }
            else { temp = number[Math.floor(tts / 100000)] + ' ' + tens[1] + ' ' + number[tts % 100000 / 10000] + ' ' + tenthousands[0] + ' ' + temp; }
        } else {
            if (tts % 100000 / 10000 === 0) { temp = tens[1] + ' ' + tenthousands[0] + ' ' + temp; }
            else if (tts % 100000 / 10000 === 5) { temp = tens[1] + ' ' + number[10] + ' ' + tenthousands[0] + ' ' + temp; }
            else { temp = tens[1] + ' ' + number[tts % 100000 / 10000] + ' ' + tenthousands[0] + ' ' + temp; }
        }
    } else {
        temp = number[tts / 10000] + ' ' + tenthousands[0] + ' ' + temp;
    }

    return temp;
}

console.log(speakNumber(input));
console.log(input);