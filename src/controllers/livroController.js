import livro from '../models/Livros.js';

class LivroController {
    static async listarLivros(req, res) {
        const listaLivro = await livro.find({});
        res.status(200).json(listaLivro);
    }

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ mensagem: "Criado com sucesso", livro: novoLivro });
        } catch (error) {
            res.status(500).json({ mensagem: `${error.mensagem} - falha ao cadastrar livro` });
        }
    }
};

export default LivroController;
