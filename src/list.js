"use strict";

import AbstractList from "./shop";
import GoodItem from "./good-item";

export default class List extends AbstractList {
    _page = 1
    _CartInstance = null

    constructor(CartInstance) {
        super();
        this._CartInstance = CartInstance;
        this.initShowMoreButton();
        this.fetchGoods();
    }

    initShowMoreButton() {
        const showMoreButton = document.querySelector("#showmore");
        if (showMoreButton) {
            showMoreButton.addEventListener("click", () => {
                this._page++;
                this.fetchGoods();
            });
        }
    }

    fetchGoods() {
        const url = `http://localhost:3000/database/catalog${this._page}.json`;
        return fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                const goods = data.data.map(item => {
                    return new GoodItem(item, this._CartInstance)
                });
                this._items = [...this._items, ...goods];
                this.render();
            });
    }

    render() {
        super.render(".goods-list");
    }
}