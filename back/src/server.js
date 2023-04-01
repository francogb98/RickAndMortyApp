const express = require("express");
const router = require("./Routes");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const whiteList = ["http://localhost:5173"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      // puede consultar la api
      callback(null, true);
    } else {
      // no esta permitido
      callback(new Error("error de cors"));
    }
  },
};

app.use(cors(corsOptions));

app.use(morgan("dev"));
app.use(express.json());
app.use("/rickandmorty", router);

// const { User } = require("./DB_connection");

// app.post("/user", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     //crea un registro 1x1
//     const newUser = await User.create({
//       email,
//       password,
//     });

//     return res.status(200).json(newUser);
//   } catch (error) {
//     return res.status(404).send(error.message);
//   }
// });
// app.post("/user/bulk", async (req, res) => {
//   try {
//     const data = req.body;

//     //crea varios registros en simultaneo, no 1x1
//     const newUsers = await User.bulkCreate(data);

//     return res.status(200).json(newUsers);
//   } catch (error) {
//     return res.status(404).send(error.message);
//   }
// });

// app.get("/user", async (req, res) => {
//   try {
//     const { name } = req.query;
//     if (!name) {
//       //devuoleve todos los elementos
//       const allUsers = await User.findAll();
//       return res.status(200).json(allUsers);
//     } else {
//       //si mandamo un name por query, traemos todos los registros que coincidan con el name
//       const users = await User.findAll({
//         where: {
//           name,
//         },
//       });
//       return res.status(200).json(users);
//     }
//   } catch (error) {
//     return res.status(404).send(error.message);
//   }
// });

// app.delete("/user/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     //buscamos un usuario por id
//     const userByPk = await User.findByPk(id);

//     //si no existe devolvemos un error y pasamos al catch
//     if (!userByPk) throw new Error("El usuario no existe");
//     //sie existe lo borramos solo a ese
//     userByPk.destroy();

//     return res.status(200).json(userByPk);
//   } catch (error) {
//     return res.status(404).send(error.message);
//   }
// });

module.exports = app;
