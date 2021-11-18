import Tile from './Tile.js';

let tiles = [];
let tilesView = [];
let covers = [];
let selected = [];
let idList = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
for (let i = 0; i < 20; i++) {
    let randomPos = Math.floor(Math.random() * idList.length);
    let id = idList[randomPos];
    idList.splice(randomPos, 1);
    let tile = new Tile();
    tile.id = id;
    tile.image = `./Session02/Resources/${id}.jpg`;
    tiles.push(tile);
}

let container = document.createElement('div');
document.body.appendChild(container);
container.style.position = 'absolute';
container.style.top = '5px';
container.style.left = '5px';
container.style.width = '516px';
container.style.height = '415px';
container.style.backgroundColor = 'grey';

let mask = document.createElement('div');

let topOffset = 10;
let leftOffset = 10;

tiles.forEach(element => {
    let tile = document.createElement('div');
    document.body.appendChild(tile);
    tile.style.position = 'absolute';
    tile.style.top = `${topOffset}px`;
    tile.style.left = `${leftOffset}px`;
    tile.style.width = '100px';
    tile.style.height = '100px';
    tile.style.background = `url('${element.image}')`;
    tile.style.backgroundColor = 'white';
    tile.style.backgroundSize = 'cover';
    tile.style.backgroundRepeat = 'no-repeat';

    tilesView.push(tile);

    let cover = document.createElement('div');
    document.body.appendChild(cover);
    cover.style.position = 'absolute';
    cover.style.top = `${topOffset}px`;
    cover.style.left = `${leftOffset}px`;
    cover.style.width = '100px';
    cover.style.height = '100px';
    cover.style.border = '1px solid white';
    cover.style.backgroundColor = 'orange';

    let label = document.createElement('div');
    cover.appendChild(label);
    label.innerText = tiles.indexOf(element) + 1;
    label.style.position = 'inherit';
    label.style.top = '30px'
    label.style.left = '37px'
    label.style.fontStyle = 'bold';
    label.style.fontSize = '30px';

    covers.push(cover);

    leftOffset += 101;
    if ((tiles.indexOf(element) + 1) % 5 === 0) {
        leftOffset = 10;
        topOffset += 101;
    }
});



covers.forEach(cover => {
    cover.addEventListener('mousedown', () => {
        cover.style.display = 'none';
        console.log(covers.indexOf(cover));
        let temp = [];
        temp.push(tiles[covers.indexOf(cover)].id);
        temp.push(covers.indexOf(cover));
        selected.push(temp);
        if (selected.length == 2) {
            if (selected[0][0] === selected[1][0]) {
                setTimeout(() => {
                    tilesView[selected[0][1]].style.display = 'none';
                    tilesView[selected[1][1]].style.display = 'none';
                    selected = [];
                }, 500);
            } else {
                mask.style.display = 'initial';
                setTimeout(() => {
                    covers[selected[0][1]].style.display = 'initial';
                    covers[selected[1][1]].style.display = 'initial';
                    selected = [];
                    mask.style.display = 'none';
                }, 500);
            }
            console.log(selected);
        }
    });
});

document.body.appendChild(mask);
mask.style.position = 'absolute';
mask.style.top = '5px';
mask.style.left = '5px';
mask.style.width = '510px';
mask.style.height = '410px';
mask.style.display = 'none';

console.log(tiles);
console.log(covers);