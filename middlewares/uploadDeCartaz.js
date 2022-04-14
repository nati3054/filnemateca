// importando o multer
const multer = require('multer');
// criando um storage
const storage = multer.diskStorage(
    {
        destination:(req,file,cb)=>{
            cb(null,__dirname + "/../public/img")
        },
        filename: (req,file,cb)=>{
            console.log(file);
            cb(null,`${Date.now()}-${file.originalname}`)
        }
    }
)
//criando um middleware multer
const middleware = multer({storage}).single("cartaz");
// Exportando o middleware
module.exports = middleware;
