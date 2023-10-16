const app = require("./src/app");
const { sequelize: renderDb } = require("./src/db");

renderDb.sync({ force: false }).then(() => {
  app.listen(3001, () => {
    console.log("listening on port 3001");
  });
});
