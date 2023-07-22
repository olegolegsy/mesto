export default class Section {
    constructor({ renderer },  containerSelector) {
        this._container = document.querySelector(containerSelector);
        this.renderer = renderer;
    }

    addItem(element) {
        this._container.append(element);
    }

    setItems(list) {
        list.forEach((cardObject) => {
            this.renderer(cardObject);
        })
    }
}