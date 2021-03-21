"use strict";

import "./style.sass";
import Cart from "./cart";
import List from "./list";

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

const CartInstance = new Cart();
new List(CartInstance);