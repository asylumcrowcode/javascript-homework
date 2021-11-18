

class Tile {
    #image;
    #id;
    set image(url) {
        this.#image = url;
    }

    get image() {
        return this.#image;
    }

    set id(id) {
        this.#id = id;
    }

    get id() {
        return this.#id;
    }
}

let tiles = [];
let covers = [];
let selected = [];
let idList = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
for (let i = 0; i < 20; i++) {
    let randomPos = Math.floor(Math.random() * idList.length);
    let id = idList[randomPos];
    idList.splice(randomPos, 1);
    let tile = new Tile();
    tile.id = id;
    tile.image = './Session02/Resources/unnamed.png';
    tiles.push(tile);
}

let container = document.createElement('div');
document.body.appendChild(container);
container.style.position = 'absolute';
container.style.top = '5px';
container.style.left = '5px';
container.style.width = '510px';
container.style.height = '410px';
container.style.backgroundColor = 'grey';

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
    tile.style.backgroundSize = 'contain';

    let cover = document.createElement('div');
    document.body.appendChild(cover);
    cover.style.position = 'absolute';
    cover.style.top = `${topOffset}px`;
    cover.style.left = `${leftOffset}px`;
    cover.style.width = '100px';
    cover.style.height = '100px';
    cover.style.border = '1px solid white';
    cover.style.backgroundColor = 'orange';

    cover.addEventListener('mousedown', () => {
        cover.style.display = 'none';
        console.log(covers.indexOf(cover));
        selected.push(covers.indexOf(cover));
        if (selected.length == 2) {
            if (selected[0] === selected[1]) {
                tiles[selected[0]].style.display = 'none';
            } else {
                setTimeout(() => {
                    covers[selected[0]].style.display = 'initial';
                    covers[selected[1]].style.display = 'initial';
                    selected = [];
                }, 2000);
            }
            
            console.log(selected);
        }
    });

    covers.push(cover);

    leftOffset += 100;
    if ((tiles.indexOf(element) + 1) % 5 === 0) {
        leftOffset = 10;
        topOffset += 100;
    }
});



console.log(tiles);
console.log(covers);