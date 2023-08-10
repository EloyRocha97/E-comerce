const { User } = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const signUp = async (req, res) => {
  try {
    const { nombre, email, contraseña, rol } = req.body;
    const emailExist = await User.findOne({ where: { email } });
    if (emailExist) {
      return res
        .status(400)
        .send({ message: "El correo electronico ya existe" });
    }
    //hasheo de contraseña
    const saltRounds = 10;
    const hashContraseña = await bcrypt.hash(contraseña, saltRounds);
    // guardado
    const newUser = await User.create({
      nombre,
      email,
      rol,
      contraseña: hashContraseña,
    });

    // crear y firmar un toker
    const token = jwt.sign(
      { id: newUser.id, nombre: newUser.nombre, email: newUser.email },
      SECRET_KEY
    );

    res.status(200).json(token);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, contraseña } = req.body;
    //valido q exista
    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(401).send({ message: "email o contraseña incorrecta" });
    //si existe, verificar
    const validacionContraseña = await bcrypt.compare(
      contraseña,
      user.contraseña
    );
    if (!validacionContraseña)
      return res
        .status(401)
        .send({ message: "email o contraseña incorrecta " });
    //ok. crear y firmar un jwt con el id de user
    const token = jwt.sign(
      { userId: user.id, nombre: user.nombre },
      SECRET_KEY
    );
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const protected = async (req, res) => {
  res.json({ msg: "Llevas proteccion ;)" });
};

module.exports = {
  signUp,
  login,
  protected,
};
