class Button {
    _text = "";
    _callback = null;


    constructor(text, callback) {
        this._text = text;
        this._callback = callback;
    }

    onButtonClick() {
        const callback = this._callback;
        if (typeof callback === "function") {
            callback();
        }
    }

    render(placeToRender) {
        if (placeToRender) {
            const button = document.createElement("button");
            button.innerHTML = this._text;
            button.style.cssText = `
            background-color: transparent;
            border: 1px solid #8B4513;
            padding: 5px;
            border-radius: 5px;
            cursor: pointer;
            outline: none;
            width: 90px;
            `;

            placeToRender.appendChild(button);

            button.addEventListener("click", () => {
                this.onButtonClick();
            })
        }
    }
}