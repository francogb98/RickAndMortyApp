const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender, id } = req.body;

  try {
    if (!name || !status || !image || !species || !gender || !id) {
      return res.status(404).json({ msg: "Faltan datos" });
    }

    const newFav = await Favorite.create({
      id,
      name,
      origin,
      status,
      image,
      species,
      gender,
    });

    res.status(201).json(newFav);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
