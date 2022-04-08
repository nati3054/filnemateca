// importar express
const express = require("express");
const AdmController = require("../controllers/AdmController");
const VerificaSeEstaLogado = require("../middlewares/VerificaSeEstaLogado");
// criando um roteador
const router = express.Router();
// criando rota
router.get('/login', AdmController.mostraLogin);
router.post('/login', AdmController.login);
router.get('/esqueci', AdmController.mostraEsqueci);
router.post('/esqueci', AdmController.lembrarSenha);
router.get('/admin', VerificaSeEstaLogado, AdmController.mostraAdmin);

// exportar roteador 
module.exports = (router)