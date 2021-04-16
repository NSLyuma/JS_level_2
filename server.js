const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("./JS_shop"));
app.use(bodyParser.json());

app.get("/itemslist/:page", (req, res) => {
    const page = req.params.page;
    fs.readFile(`./JS_shop/database/catalog${page}.json`, "utf8", (err, data) => {
        res.send(data);
    });
});

app.post("/itemslist", (req, res) => {
    const offset = 8;
    const filePath = "./JS_shop/database/catalog3.json";

    fs.readFile(filePath, "utf8", (err, data) => {
        const list = JSON.parse(data || {});
        const amountOfData = Object.keys(list).length;
        const newId = offset + amountOfData + 1;
        const newItem = req.body;
        newItem.id = newId;
        list[newId] = newItem;
        fs.writeFile(filePath, JSON.stringify(list), (err) => {
            res.send(list);
        });
    });
});

app.listen(4000, () => {
    console.log("Server started!");
});