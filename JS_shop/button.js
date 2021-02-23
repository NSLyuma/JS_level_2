// class Button {
//     _text = "Add to cart";
//     _callback = null;


//     constructor(callback) {
//         this._callback = callback;
//     }

//     onButtonClick() {
//         const callback = this._callback;
//         if (typeof callback === "function") {
//             callback();
//         }
//     }

//     render(placeToRender) {
//         if (placeToRender) {
//             const button = document.createElement("button");
//             button.innerHTML = this._text;
//             button.style.cssText = `
//             background-color: #8B4513;
//             border: none;
//             padding: 5px;
//             border-radius: 2px;
//             cursor: pointer;
//             outline: none;
//             `;

//             placeToRender.appendChild(button);

//             button.addEventListener("click", () => {
//                 this.onButtonClick();
//             })
//         }
//     }
// }

class Button {
    text = "Add to cart"

    constructor() {
        this.render();
    }

    render(placeToRender) {
        if (placeToRender) {
            const button = document.createElement("button");
            button.innerHTML = this.text;
            button.style.cssText = `
            background-color: #8B4513;
            border: none;
            padding: 5px;
            border-radius: 2px;
            cursor: pointer;
            outline: none;
            `;

            placeToRender.appendChild(button);
        }
    }
}