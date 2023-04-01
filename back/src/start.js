const app = require("./server");
const { db } = require("./DB_connection");

app.listen("3001", async () => {
  console.log("servidor corriendo");
  await db.sync();
  await db.sync({ alter: true });
});
