class Button {
    text = "Add"
    placeToRender = ""

    constructor() {
        const place = document.querySelector(".cart-list");
        this.placeToRender = place;
        this.render();
    }

    onClick() {
        const par = this.placeToRender.querySelector("p");
        par.innerHTML = "";
        const GoodsItem = new Goods();
        GoodsItem.add(this.placeToRender);
    }

    render() {
        const btn = document.createElement("button");
        btn.innerHTML = this.text;
        this.placeToRender.insertAdjacentElement("beforeend", btn);
        btn.addEventListener("click", () => {
            this.onClick();
        })
    }
}

class Goods {
    name = "name"
    price = 20
    placeToRender = ""

    constructor() {
        const place = document.querySelector(".cart-list");
        this.placeToRender = place;
        this.add();
    }

    add() {
        const card = document.createElement("div");
        card.innerHTML = `
            Name: ${this.name}
            Price: ${this.price}
            `;
        this.placeToRender.insertAdjacentElement("beforeend", card);
    }
}

const NewBtn = new Button();