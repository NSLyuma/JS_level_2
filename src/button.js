"use strict";

export default class Button {
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

            placeToRender.appendChild(button);

            button.addEventListener("click", () => {
                this.onButtonClick();
            })
        }
    }
}