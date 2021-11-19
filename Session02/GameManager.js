import Tile from './Tile.js';

export default class GameManager {
    #tiles;
    #selected;
    #score;
    #start;

    constructor() {
        this.idList = [];
        this.#score = 0;
        this.#start = true;
        this.#tiles = [];
        this.#selected = [];
    }

    get selected() {
        return this.#selected;
    }

    set selected(selected) {
        this.#selected = selected;
    }

    get score() {
        return this.#score;
    }

    set score(score) {
        this.#score = score;
    }

    get start() {
        return this.#start
    }

    set start(start) {
        this.#start = start;
    }

    get tiles() {
        return this.#tiles;
    }

    init(numTiles) {
        this.#tiles = [];
        this.idList = [];
        
        for (let i = 1; i <= Math.floor(numTiles / 2); i++) {
            this.idList.push(i);
            this.idList.push(i);
        }

        for (let i = 0; i < numTiles; i++) {
            let randomPos = Math.floor(Math.random() * this.idList.length);
            let id = this.idList[randomPos];
            this.idList.splice(randomPos, 1);
            let tile = new Tile();
            tile.id = id;
            tile.image = `./Session02/Resources/${id}.jpg`;
            this.#tiles.push(tile); 
        }

        this.#selected = [];
        this.#score = 0;
        this.#start = true;
    }

}