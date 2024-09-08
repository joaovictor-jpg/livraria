//import http from "http";

import app from "./src/app.js";

const PORT = 3000;

/*const rota = {
    "/": "Curso de Node.js",
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rota autores"
};*/

/*const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain"});
    res.end(rota[req.url]);
});*/

app.listen(PORT, () => {
    console.log("Servidor escutando!");
});