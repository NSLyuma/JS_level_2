class List {
    _items = []

    constructor() {
        let goods = this.fetchGoods();
        goods = goods.map(item => {
            return new GoodItem(item)
        });
        this._items = goods;
        this.render();
    }

    fetchGoods() {
        return [
            { name: "Bread", price: 15, img: "img/bread.jpg" },
            { name: "Cheese", price: 100, img: "img/cheese.jpg" },
            { name: "Tea", price: 50, img: "img/tea.jpg" },
            { name: "Pizza", price: 80, img: "img/pizza.jpg" },
        ];
    }

    render() {
        this._items.forEach(Good => {
            Good.render();
        })
    }
}

class GoodItem {
    _name = ""
    _price = 0
    _img = 0

    constructor({ name, price, img }) {
        this._name = name;
        this._price = price;
        this._img = img;
    }

    render() {
        const placeToRender = document.querySelector(".goods-list");
        if (placeToRender) {
            placeToRender.style.cssText = `
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            `;

            const goodItem = document.createElement("div");

            goodItem.innerHTML = `
            <img src="${this._img}" width="200px" />
            <p>Item: ${this._name}</p>
            <span>Price: ${this._price}</span>
            `;

            goodItem.style.cssText = `
            background-color: #FFA07A;
            border-radius: 10px;
            padding: 10px;
            width: 220px;
            margin: 10px;
            `;

            const AddButton = new Button();
            AddButton.render(goodItem);

            placeToRender.appendChild(goodItem);

            goodItem.addEventListener("click", function () {
                // console.log(goodItem);
                let itemName = goodItem.querySelector("p");
                // console.log(itemName);
                const cartItemPlace = document.querySelector(".cart-list");
                if (cartItemPlace) {
                    cartItemPlace.style.cssText = placeToRender.style.cssText;
                    if (itemName.innerHTML.includes("Bread")) {

                        let cartItem = document.createElement("div");

                        cartItem.innerHTML = `
                        <img src="${GoodsList._items[0]._img}" width="200px" />
                        <p>Item: ${GoodsList._items[0]._name}</p>
                        <span>Price: ${GoodsList._items[0]._price}</span>
                        `;

                        cartItem.style.cssText = goodItem.style.cssText;
                        cartItemPlace.appendChild(cartItem);
                    } else if (itemName.innerHTML.includes("Cheese")) {

                        let cartItem = document.createElement("div");

                        cartItem.innerHTML = `
                        <img src="${GoodsList._items[1]._img}" width="200px" />
                        <p>Item: ${GoodsList._items[1]._name}</p>
                        <span>Price: ${GoodsList._items[1]._price}</span>
                        `;

                        cartItem.style.cssText = goodItem.style.cssText;
                        cartItemPlace.appendChild(cartItem);
                    } else if (itemName.innerHTML.includes("Tea")) {

                        let cartItem = document.createElement("div");

                        cartItem.innerHTML = `
                        <img src="${GoodsList._items[2]._img}" width="200px" />
                        <p>Item: ${GoodsList._items[2]._name}</p>
                        <span>Price: ${GoodsList._items[2]._price}</span>
                        `;

                        cartItem.style.cssText = goodItem.style.cssText;
                        cartItemPlace.appendChild(cartItem);
                    } else if (itemName.innerHTML.includes("Pizza")) {

                        let cartItem = document.createElement("div");

                        cartItem.innerHTML = `
                        <img src="${GoodsList._items[3]._img}" width="200px" />
                        <p>Item: ${GoodsList._items[3]._name}</p>
                        <span>Price: ${GoodsList._items[3]._price}</span>
                        `;

                        cartItem.style.cssText = goodItem.style.cssText;
                        cartItemPlace.appendChild(cartItem);
                    }
                }
            });
        }
    }
}

// class Cart {
//     GoodsList = null

//     constructor(GoodsList) {
//         this.GoodsList = GoodsList;
//         this.render();
//     }

//     render() {
//         const placeToRender = document.querySelector(".cart-list");
//         if (placeToRender) {
//             const item = document.createElement("div");
//             item.innerHTML = `
//                         <p>${GoodsList._name}</p>
//                         <p>${GoodsList._price}</p>
//                         <img src="${GoodsList._img}" width="200px" />
//                         `;
//         }
//         placeToRender.appendChild(item);
//     }

// }

const GoodsList = new List();