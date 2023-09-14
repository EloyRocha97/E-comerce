const { User } = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const ROLES = {
  ADMIN: "admin",
  USER: "user",
  SUPER_ADMIN: "superAdmin",
};

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

// const protected = async (req, res) => {
//   const user = req.user; // Asumiendo que has configurado un middleware para decodificar el token y almacenar el usuario en req.user

//   // Verifica el rol del usuario
//   if (user.rol === ROLES.ADMIN || user.rol === ROLES.SUPER_ADMIN) {
//     res.json({ msg: "Llevas protección ;)" });
//   } else {
//     res
//       .status(403)
//       .json({ message: "No tienes permiso para acceder a esta función." });
//   }
// };

const protected = (req, res) => {
  const user = req.user;

  if (
    user &&
    user.roles &&
    (user.roles.includes("admin") || user.roles.includes("superAdmin"))
  ) {
    res.json({ msg: "Llevas protección ;)" });
  } else {
    res
      .status(403)
      .json({ message: "No tienes permiso para acceder a esta función." });
  }
};

module.exports = {
  signUp,
  login,
  protected,
};
