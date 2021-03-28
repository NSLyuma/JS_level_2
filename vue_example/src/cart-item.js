"use strict";

export default class CartItem {
    _name = ""
    _price = 0
    _img = ""
    counter = 1

    constructor({ name, price, img }) {
        this._name = name;
        this._price = price;
        this._img = img;
    }

    render() {
        const placeToRender = document.querySelector(".cart-list");
        if (placeToRender) {
            const item = document.createElement("div");
            item.classList.add("cart-item")
            item.innerHTML = `
            <div>
                <img src="${this._img}" width="100px" />
                <p>${this._name}</p>
            </div>
            <div class="total">
                <p>Price: ${this._price}</p>
                <p>Quantity: ${this.counter}</p>
                <p>Total: ${this._price * this.counter}</p>
            </div>
            `;

            placeToRender.appendChild(item);
        }
    }
}