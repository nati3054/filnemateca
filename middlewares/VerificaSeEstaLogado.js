// middleware é uma função, precisa de 3 paramentros (req,res,next)
module.exports = (req,res,next)=>{
    // verificar se um usúario está logado 
    if(req.session.usuario == undefined){

    //  se não estiver direcionar para o /login res.redirect (redirecionar)
    res.redirect('/login')

    }else{
    // se estiver logado, pode ir adiante
    next();
    }
}