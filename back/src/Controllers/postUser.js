const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  console.log(password);
  if (!username || username === "" || !password || password === "") {
    return res.status(402).send("faltan datos");
  }
  try {
    const newUser = await User.create({
      email: username,
      password,
    });
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
