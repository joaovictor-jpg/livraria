import express from "express";
import livros from "./livrosRouters.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.starus(200).send("Curso de node js"));

    app.use(express.json(), livros);
};

export default routes;