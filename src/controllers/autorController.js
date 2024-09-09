import { autor } from "../models/Autor.js";

class AutorController {
    static async listarAutores(_, res) {
        try {
            const autores = await autor.find({});
            res.status(200).json(autores);
        } catch (error) {
            res.status(500).json({ message: "Falha ao buscar autores" });
        }
    };

    static async buscarPorId(req, res) {
        try {
            const id = req.params.id;
            const autorPeloId = await autor.findById(id);
            res.status(200).json({ autorPeloId });
        } catch (error) {
            res.status(500).json({ menssage: `Erro ao procurar autor ${error.menssage}` });
        }
    };

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Autor criado com sucesso", autor: novoAutor });
        } catch (error) {
            res.status(500).json({ message: `Error ao criar autor` })
        }
    };

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            const autorAtualizado = await autor.findByIdAndUpdate(id, req.body);
            res.status(201).json({ message: "Autor atualizado com sucesso", autor: autorAtualizado });
        } catch (error) {
            res.status(500).json({ message: "Error ao atualizar autor" });
        }
    };

    static async deletarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(201).json({message: "Autor deletado"});
        } catch (error) {
            res.status(500).json({ message: "Error ao deletar autor" });
        }
    }
};

export default AutorController;