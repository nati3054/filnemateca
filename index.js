// importação da biblioteca express
    const express = require('express');
    const path = require('path');
    
    // importando o roteador
    const FilmesRouter = require('./routers/FilmesRouter');

    // Criando um servidor 
    const servidor = express()

    // Configuração do Template Engine
    servidor.set('view engine','ejs');
    // configurando a pasta public como contenedora dos arquivos estáticos 
    servidor.use(express.static(path.join(__dirname, 'public')));

    // usando FilmesRuter 
    servidor.use('/', FilmesRouter);

    
   // Por o servidor para ouvir 
   servidor.listen(3000)
   
  
    