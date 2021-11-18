export default class Tile {
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