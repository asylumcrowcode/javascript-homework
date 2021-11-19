import Tile from './Tile.js';
import GameManager from './GameManager.js';


let tilesView = [];
let covers = [];

let gameManager = new GameManager();
gameManager.init(20);

document.body.style.backgroundColor = '#00BFFF';

let container = document.createElement('div');
document.body.appendChild(container);
container.style.position = 'absolute';
container.style.top = '5px';
container.style.left = '5px';
container.style.width = '516px';
container.style.height = '415px';
container.style.backgroundColor = 'grey';

let mask = document.createElement('div');
let scoreAdustment = document.createElement('div');

let scoreLabel = document.createElement('div');
document.body.appendChild(scoreLabel);
scoreLabel.innerText = `Score: ${gameManager.score}`;
scoreLabel.style.position = 'absolute';
scoreLabel.style.top = '450px';
scoreLabel.style.left = '200px';
scoreLabel.style.fontStyle = 'bold';
scoreLabel.style.fontSize = '30px';

let topOffset = 10;
let leftOffset = 10;

gameManager.tiles.forEach(element => {
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
    label.innerText = gameManager.tiles.indexOf(element) + 1;
    label.style.position = 'inherit';
    label.style.top = '30px'
    label.style.left = '37px'
    label.style.fontStyle = 'bold';
    label.style.fontSize = '30px';

    covers.push(cover);

    leftOffset += 101;
    if ((gameManager.tiles.indexOf(element) + 1) % 5 === 0) {
        leftOffset = 10;
        topOffset += 101;
    }
});

let restart = function () {
    tilesView.forEach(element => {
        element.style.display = 'initial';
    });

    covers.forEach(element => {
        element.style.display = 'initial';
    });


    mask.style.display = 'none';
    scoreLabel.innerText = `Score: ${gameManager.score}`;
}


covers.forEach(cover => {
    cover.addEventListener('mousedown', () => {
        cover.style.display = 'none';
        console.log(covers.indexOf(cover));
        let temp = [];
        temp.push(gameManager.tiles[covers.indexOf(cover)].id);
        temp.push(covers.indexOf(cover));
        gameManager.selected.push(temp);
        if (gameManager.selected.length == 2) {
            if (gameManager.selected[0][0] === gameManager.selected[1][0]) {
                if (gameManager.score === 0 && gameManager.start) {
                    scoreAdustment.innerText = '+ 10.000';
                    scoreAdustment.style.top = '150px';
                    scoreAdustment.style.left = '30px';
                    scoreAdustment.style.fontSize = '120px';
                    scoreAdustment.style.color = '#FFD700';
                    gameManager.score += 10000;
                    gameManager.start = !gameManager.start;
                } else {
                    scoreAdustment.innerText = '+ 1.000';
                    scoreAdustment.style.top = '150px';
                    scoreAdustment.style.left = '60px';
                    scoreAdustment.style.fontSize = '120px';
                    scoreAdustment.style.color = '#00FFFF';
                    gameManager.score += 1000;
                }
                mask.style.display = 'initial';
                setTimeout(() => {
                    tilesView[gameManager.selected[0][1]].style.display = 'none';
                    tilesView[gameManager.selected[1][1]].style.display = 'none';
                    gameManager.selected = [];
                    mask.style.display = 'none';
                }, 1000);
            } else {
                if (!gameManager.start) {
                    scoreAdustment.innerText = '- 500';
                    scoreAdustment.style.top = '150px';
                    scoreAdustment.style.left = '100px';
                    scoreAdustment.style.fontSize = '120px';
                    scoreAdustment.style.color = '#DC143C';
                    gameManager.score -= 500;
                } else { scoreAdustment.innerText = ''; }
                mask.style.display = 'initial';
                setTimeout(() => {
                    covers[gameManager.selected[0][1]].style.display = 'initial';
                    covers[gameManager.selected[1][1]].style.display = 'initial';
                    gameManager.selected = [];
                    mask.style.display = 'none';
                }, 500);
            }
            console.log(gameManager.selected);
        }

        if (gameManager.score < 0) {
            scoreAdustment.innerText = 'GAME OVER';
            scoreAdustment.style.color = 'red';
            scoreAdustment.style.top = '170px';
            scoreAdustment.style.left = '50px';
            scoreAdustment.style.fontSize = '70px';
            mask.style.display = 'initial';
            setTimeout(() => {
                mask.style.display = 'none';
                gameManager.init(20);
                restart();
            }, 2000);
        }

        let check = false;
        covers.forEach(element => {
            if (element.style.display !== 'none') {
                check = true;
            }
        });
        if (check === false) {
            scoreAdustment.innerText = 'CONGRATULATION';
            scoreAdustment.style.color = '#7FFF00';
            scoreAdustment.style.top = '180px';
            scoreAdustment.style.left = '30px';
            scoreAdustment.style.fontSize = '50px';
            mask.style.display = 'initial';
            setTimeout(() => {
                mask.style.display = 'none';
                gameManager.init(20);
                restart();
            }, 2000);
        }

        scoreLabel.innerText = `Score: ${gameManager.score}`;
    });
});



document.body.appendChild(mask);
mask.style.position = 'absolute';
mask.style.top = '5px';
mask.style.left = '5px';
mask.style.width = '510px';
mask.style.height = '410px';
mask.style.display = 'none';

mask.appendChild(scoreAdustment);
scoreAdustment.style.position = 'absolute';
scoreAdustment.innerText = '+ 10.000';
scoreAdustment.style.top = '150px';
scoreAdustment.style.left = '30px';
scoreAdustment.style.color = 'black';
scoreAdustment.style.fontStyle = 'bold';
scoreAdustment.style.fontSize = '120px';

console.log(gameManager.tiles);
console.log(covers);