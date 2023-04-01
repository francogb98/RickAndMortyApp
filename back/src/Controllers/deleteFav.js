const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    //buscamos un usuario por id
    const userByPk = await Favorite.findByPk(id);

    //si no existe devolvemos un error y pasamos al catch
    if (!userByPk) throw new Error("El usuario no existe");
    //sie existe lo borramos solo a ese
    userByPk.destroy();
    const allFav = await Favorite.findAll();

    return res.status(200).json(allFav);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = deleteFav;
