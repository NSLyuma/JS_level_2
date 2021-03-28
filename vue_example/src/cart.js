"use strict";

import CartItem from "./cart-item";
import AbstractList from "./shop-main";

export default class Cart extends AbstractList {
    constructor() {
        super();
    }

    add(GoodItemInstance) {
        const FoundItem = this._items.find((CartItem) => {
            return CartItem._name === GoodItemInstance._name;
        });

        if (FoundItem) {
            FoundItem.counter++;
        } else {
            this._items.push(new CartItem({
                name: GoodItemInstance._name,
                price: GoodItemInstance._price,
                img: GoodItemInstance._img
            }));
        }

        this.render();
    }

    render() {
        super.render(".cart-list");
    }

}