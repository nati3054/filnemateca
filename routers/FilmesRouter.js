// importa o express
const express = require("express");
// importa MiddlewareGuardaBusca
const middlewareGuardaBusca = require('../middlewares/middlewareGuardaBusca')
// importa FilmesController
const FilmesController = require('../controllers/FilmesController');
// criar o roteador com express.Router
const router = express.Router();
// Criando as rotas dos servidor
router.get('/', FilmesController.index);

router.get('/filme', FilmesController.listarFilmes);

router.get('/filmes/:id', FilmesController.buscarPorId);

router.get('/busca', middlewareGuardaBusca, FilmesController.buscarPorTrecho);

router.get('/buscaporid/:id', FilmesController.buscarPorId);

router.get('/generos/:genero',FilmesController.buscarPorGenero);

module.exports = router;