import { autor } from '../models/Autor.js';
import livro from '../models/Livros.js';

class LivroController {
    static async listarLivros(req, res) {
        try {
            const listaLivro = await livro.find({});
            res.status(200).json(listaLivro);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição` });
        }
    };

    static async listaLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroId = await livro.findById(id);
            res.status(200).json(livroId);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição do livro` })
        }
    };

    static async listarLivroPorEditora(req, res) {
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({ editora: editora });
            res.status(200).json({ livros: livrosPorEditora });
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao vazer buscar por editora`})
        }
    }

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
        try {
            const autorencontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorencontrado._doc } };
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ mensagem: "Criado com sucesso", livro: livroCriado });
        } catch (error) {
            res.status(500).json({ mensagem: `${error.mensagem} - falha ao cadastrar livro` });
        }
    };

    static async atualizar(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao atualizar livro` })
        }
    };

    static async deleterLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(201).json({ message: "Livro deletado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao tentar deletar livro` })
        }
    };
};

export default LivroController;
