// importação da biblioteca express
    const express = require('express');
    
    // importando o roteador
    const FilmesRouter = require('./routers/FilmesRouter');

    // Criando um servidor 
    const servidor = express()

    // usando FilmesRuter 
    servidor.use('/', FilmesRouter);

    
   // Por o servidor para ouvir 
   servidor.listen(3000)
   
  
    