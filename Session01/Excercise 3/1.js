let garden = [[0, 0, 0], [0, 1, 1], [0, 1, 0], [0, 1, 1], [0, 0, 0]];
const result = [];
let path = [];

let gardenPath = function (x, y, garden) {
    if (garden[x][y] === 1) {
        console.log(x + '' + y + ' 1');
        if (x === 4) path = [];
    }
    else {
        path.push(y);
        if (x === 4) {
            console.log(x + '' + y + ' 0 end path');
            let temp = path.slice();
            result.push(temp);
            path.pop();
        } else {
            for (let i = 0; i < 3; i++) {
                if (y === 0) {
                    if (i === 0 || i === 1) {
                        gardenPath(x + 1, i, garden);
                    }
                } else if (y === 1) {
                    gardenPath(x + 1, i, garden);
                } else {
                    if (i === 1 || i === 2) {
                        gardenPath(x + 1, i, garden);
                    }
                }
            }
        }
    }
}

for (let i = 0; i < 3; i++) {
    if (garden[0][i] === 0) {
        console.log('start');
        path = [];
        gardenPath(0, i, garden);
    }
}

console.log(result);