"use strict";

import Button from "./button";

export default class GoodItem {
    _name = ""
    _price = 0
    _img = 0
    _CartInstance = null

    constructor({ name, price, img }, CartInstance) {
        this._name = name;
        this._price = price;
        this._img = img;
        this._CartInstance = CartInstance;
    }

    addToCart() {
        this._CartInstance.add(this);
    }

    render() {
        const placeToRender = document.querySelector(".goods-list");
        if (placeToRender) {
            const goodItem = document.createElement("div");
            goodItem.classList.add("item")

            goodItem.innerHTML = `
            <img src="${this._img}" width="200px" />
            <p>Item: ${this._name}</p>
            <span>Price: ${this._price}</span>
            `;

            const AddButton = new Button("Add to cart", this.addToCart.bind(this));
            AddButton.render(goodItem);

            placeToRender.appendChild(goodItem);
        }
    }
}