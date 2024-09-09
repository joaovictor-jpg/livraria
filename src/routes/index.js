import express from "express";
import livros from "./livrosRouters.js";
import autor from "./autorRouters.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.starus(200).send("Curso de node js"));

    app.use(express.json(), livros, autor);
};

export default routes;