"use strict";

// class List {
//     _items = []

//     constructor(CartInstance) {
//         let goods = this.fetchGoods();
//         goods = goods.map(item => {
//             return new GoodItem(item, CartInstance);
//         });
//         this._items = goods;
//         this.render();
//     }

//     fetchGoods() {
//         // const url = `http://localhost:3000/database/catalog${this._page}.json`;
//         // return fetch(url);
//         return [
//             {
//                 name: "Bread",
//                 price: 15,
//                 img: "img/bread.jpg"
//             },
//             {
//                 name: "Cheese",
//                 price: 100,
//                 img: "img/cheese.jpg"
//             },
//             {
//                 name: "Tea",
//                 price: 50,
//                 img: "img/tea.jpg"
//             }
//         ]
//     }

//     render() {
//         this._items.forEach(Good => {
//             Good.render()
//         })
//     }
// }

// class GoodItem {
//     _name = ""
//     _price = 0
//     _img = 0
//     _CartInstance = null

//     constructor({ name, price, img }, CartInstance) {
//         this._name = name;
//         this._price = price;
//         this._img = img;
//         this._CartInstance = CartInstance;
//     }

//     addToCart() {
//         this._CartInstance.add(this);
//         console.log("Added");
//     }

//     render() {
//         const placeToRender = document.querySelector(".goods-list");
//         if (placeToRender) {
//             const block = document.createElement("div");
//             block.innerHTML = `Good: ${this._name}`;
//             const btn = new Button("Add", this.addToCart.bind(this));
//             btn.render(placeToRender);
//             placeToRender.appendChild(block);
//         }
//     }
// }

// class Cart {
//     add() {

//     }
// }

// class CartItem {

// }

// const CartInstance = new Cart();
// new List(CartInstance);


//сверху работает


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