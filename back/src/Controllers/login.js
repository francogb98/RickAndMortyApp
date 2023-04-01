const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;

  try {
    if (!email || email === "" || !password || password === "") {
      return res.status(400).json({ msg: "Faltan Datos" });
    }
    const user = await User.findAll({
      where: {
        email,
      },
    });
    if (!user) return res.status(400).json({ msg: "Usuario no encontrado" });

    const pass = await User.findOne({
      where: {
        email,
        password,
      },
    });
    if (!pass) return res.status(400).json({ msg: "Contraseña incorrecta" });
    res.status(200).json({ access: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = login;
