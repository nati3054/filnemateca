const fs = require('fs');
module.exports = (req,res,next) =>{
    let trechoBuscado = req.query.busca + "\n";
    fs.writeFileSync("./trechosBuscado.txt",trechoBuscado,{flag:'a+'})
    next()
}

