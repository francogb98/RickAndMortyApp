const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  const { id } = req.params;

  try {
    const resp = await axios(`https://rickandmortyapi.com/api/character/${id}`);
    const data = resp.data;

    const character = {
      name: data.name,
      species: data.species,
      image: data.image,
      gender: data.gender,
    };
    res.status(201).json(character);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

module.exports = getCharById;
