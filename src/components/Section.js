export default class Section {
    constructor({ items, renderer },  containerSelector) {
        this._container = document.querySelector(containerSelector);
        this._initialArray = items;
        this.renderer = renderer;
    }

    addItem(element) {
        this._container.prepend(element);
    }

    setItems() {
        this._initialArray.forEach((cardObject) => {
            this.renderer(cardObject);
        })
    }
}