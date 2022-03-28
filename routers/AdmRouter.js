// importar express
const express = require("express");
const AdmController = require("../controllers/AdmController");
// criando um roteador
const router = express.Router();
// criando rota
router.get('/login', AdmController.mostraLogin);
router.post('/login', AdmController.login);
// exportar roteador 
module.exports = (router)