const FilmesController = {
    index: (req, res) => {
        console.log("Alguem fez uma requisição ...");
        res.send("devolvendo requisição ...");
    },
    listarFilmes: (req, res) => {
        const filmes = require('../database/filmes.json')
        res.send(filmes);
    },
    buscaPelaPosicao: (req, res) => {
        let posicao = req.params.posicao;
        const filmes = require('../database/filmes.json');
        res.send(filmes[posicao]);
    },
    buscarPorTrecho: (req, res) => {
        let trecho = req.params.trecho;
        const filmes = require('../database/filmes.json');
        let filtradora = filme => {
            return filme.titulo.includes(trecho);
        }
        let filmesFiltrados = filmes.filter(filtradora);
        res.send(filmesFiltrados);
    },
    buscarPorId: (req, res) => {

    },

    buscarPorGenero: (req, res) => {

    },
 }

module.exports = FilmesController