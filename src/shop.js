"use strict";

import "./style.sass";

export default class AbstractList {
    _items = []

    render(selectorName) {
        const placeToRender = document.querySelector(selectorName);
        if (placeToRender) {
            placeToRender.innerHTML = "";
        }

        this._items.forEach(elem => {
            elem.render();
        });
    }
}

