const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // console.log(req.url);

    let body = null;

    try {
        const ext = req.url.split(".")[1];
        const isSvg = ext === "svg"

        if (isSvg) {
            res.setHeader("Content-Type", "image/svg+xml");
        }

        if (req.url.includes("/img")) {
            body = fs.readFileSync(`./Geekbrains_project_shop${req.url}`);
        } else {
            body = fs.readFileSync(`./Geekbrains_project_shop${req.url}`, "utf8");
        }
    } catch (err) {
        body = fs.readFileSync("./Geekbrains_project_shop/index.html", "utf8");
    }

    res.end(body);
});

server.listen(3000);

console.log("Server started!");