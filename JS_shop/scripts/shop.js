class AbstractList {
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

class List extends AbstractList {
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

class GoodItem {
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

class Cart extends AbstractList {
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

class CartItem {
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
                <p>Quantity:${this.counter}</p>
                <p>Total: ${this._price * this.counter}</p>
            </div>
            `;

            placeToRender.appendChild(item);
        }
    }
}

const CartInstance = new Cart();
new List(CartInstance);