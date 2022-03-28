// importação da biblioteca express
    const express = require('express');
    const path = require('path');
    const middlewareGlobal = require('./middlewares/middlewareGlobal');
    // importando o roteador
    const FilmesRouter = require('./routers/FilmesRouter');
    const AdmRouter = require('./routers/AdmRouter')
   

    // Criando um servidor 
    const servidor = express()

    // Configuração do Template Engine
    servidor.set('view engine','ejs');
    // configurando a pasta public como contenedora dos arquivos estáticos 
    servidor.use(express.static(path.join(__dirname, 'public')));

    // coloca as informações do usuario no req.body
    servidor.use(express.urlencoded({ extended: false }));


    servidor.use(middlewareGlobal)

    // usando FilmesRuter 
    servidor.use('/', FilmesRouter);
    servidor.use('/', AdmRouter);

    
   // Por o servidor para ouvir 
   servidor.listen(3000)
   
  
    