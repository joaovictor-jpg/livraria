import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/buscar", LivroController.listarLivroPorEditora);
routes.get("/livros/:id", LivroController.listaLivroPorId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizar);
routes.delete("/livros/:id", LivroController.deleterLivro);

export default routes;