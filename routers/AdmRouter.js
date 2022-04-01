// importar express
const express = require("express");
const AdmController = require("../controllers/AdmController");
// criando um roteador
const router = express.Router();
// criando rota
router.get('/login', AdmController.mostraLogin);
router.post('/login', AdmController.login);
router.get('/esqueci', AdmController.mostraEsqueci);
router.post('/esqueci', AdmController.lembrarSenha);

// exportar roteador 
module.exports = (router)