module.exports = {
    mostraLogin: (req, res) => {
        res.render("login",{erro:0})
    },
    login: (req, res) => {
       // 1 - Carregar o array de usuários
       const usuarios = require('../database/usuarios.json')
        // 2 - Capturar o email e a senha digitadas pelo visitante!
        // let dados = req.body; // veio por Post : pego req.body
        //let dados = req.query: // veio por GET : pego req.query
        //let dados = req.params: //veio por PAREMETRÔ DE ROTAS : pego req.params

       let emailDigitado = req.body.email;
       let senhaDigitada = req.body.senha;

        // 3 - Verificar se usuário é cadastrado!
        //     Procuro no array de usuários se existe
        //     algum com login e senha digitados
        let usuario = usuarios.find(
            u => {
                if(emailDigitado == u.email && senhaDigitada == u.senha){
                    return true
                }else{
                    return false
                }
            }
        )

        // 4 - Caso exista o usuário com email senha dados, retornar OK!
        //     Caso não exista, dar mensagem "Usuário inexistente!"
            if(usuario == undefined){
                res.send("Usúario inexistente"); // não está dando {erro:1}
            }else{
                res.send(`Seja Bem-Vindo, ${usuario.email}`);
            }
    },
    mostraEsqueci:(req,res) =>{
        res.render('esqueci.ejs');
    }, 
    lembrarSenha:(req,res)=>{
        res.send(req.body)
    }
}
   
