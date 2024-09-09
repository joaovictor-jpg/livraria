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
    }

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ mensagem: "Criado com sucesso", livro: novoLivro });
        } catch (error) {
            res.status(500).json({ mensagem: `${error.mensagem} - falha ao cadastrar livro` });
        }
    }

    static async atualizar(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao atualizar livro` })
        }
    }
};

export default LivroController;
