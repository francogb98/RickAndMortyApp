const { Favorite } = require("../DB_connection");

const getFav = async (req, res) => {
  const { id, gender } = req.query;
  try {
    const condition = {};
    const where = {};

    if (id) {
      where.id = id;
    }
    if (gender) {
      if (gender === "All-Fav") {
        const allFav = await Favorite.findAll();
        return res.status(200).json(allFav);
      }

      where.gender = gender;
    }
    condition.where = where;
    //{where:{id}}

    const allFav = await Favorite.findAll(condition);
    return res.status(200).json(allFav);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = getFav;
