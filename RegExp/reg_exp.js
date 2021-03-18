class Form {
    element = ""
    regExp = ""
    message = ""

    constructor(element, regExp, message) {
        this.element = element;
        this.regExp = regExp;
        this.message = message;
    }

    checkForm(value) {
        if (!value.match(this.regExp)) {
            console.log(this.message);
        }
    }
}

const UserName = new Form("name", /^[a-zа-я\s]+$/gi, "Поле 'Имя' должно содержать только буквы!");
const UserPhone = new Form("phone", /^\+7\(\d{3}\)\d{3}-\d{4}$/g, "Поле 'Телефон' должно содержать только цифры в формате +7(ххх)ххх-хххх!");
const UserEmail = new Form("email", /^([a-zA-Z\d\._-]+)@([a-z\d\._-]+)\.([a-z\.]{2,6})$/g, "Поле 'Email' должно содержать email!");