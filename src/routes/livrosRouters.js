import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livro/:id", LivroController.listaLivroPorId);
routes.post("/livro", LivroController.cadastrarLivro);
routes.put("livro/:id", LivroController.atualizar);

export default routes;