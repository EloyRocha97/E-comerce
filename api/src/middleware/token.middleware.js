const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;
const { User } = require("../db");

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token)
    return res.status(401).send({ msg: "No se proporciono un token" });
  try {
    const decodeToken = await jwt.verify(token, SECRET_KEY);
    //en esta parte podemos incluir las validaciones que queramos
    /*const user = await User.findOne({ where: { id: decodeToken.userId } }); //como ej. volvi a valdar si 
    existe el usuario
    */
    //...
    req.userId = decodeToken.userId; //dice si el token es valido
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { verifyToken };

// desde el front... Como accedemos al token?
/*
DESDE LOCAL STORAGE:

 1) Como lo guardo en local Storage?

dos pasos:
... el back nos responde con el token, y desde el front accedemos al localstorage y seteamos un item, al 
que le pasamos un nombre,ej: "clave" y el token...
localStorage.setItem("clave", token)

 2) Como accedo al local storage?

const valor = localStorage.getItem("clave")

 3) Como enviar un token desde el front en header de auth:

axios.get("localhost:3000/protected",{
    headres: {
        autorization: `bearer ${token}`
    }
})

 4) Como eliminar el token de local storage?

localStorage.removeItem("clave")


DESDE LAS COOKIES:
googlealo capo
*/
