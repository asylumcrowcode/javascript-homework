let garden = [[0, 0, 1], [0, 1, 1], [0, 1, 0], [0, 1, 1], [0, 0, 1]];
const temp = [];
let temp2 = [];

let gardenPath = function (x, y, garden) {
    if (garden[x][y] === 1) {
        console.log(x + '' + y + '1');
        if (x === 4) temp2 = [];
    }
    else {
        temp2.push(y);
        if (x === 4) {
            console.log(x + '' + y + '0');
            let temp3 = temp2.slice();
            temp.push(temp3);
            temp2.pop();
        } else {
            for (let i = 0; i < 3; i++) {
                gardenPath(x + 1, i, garden);
            }
        }
    }
}

for (let i = 0; i < 3; i++) {
    gardenPath(0, i, garden);
}

console.log(temp);