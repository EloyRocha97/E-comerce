const app = require("./src/app");
const { sequelize } = require("./src/db");
const KEY = process.env.KEY || 3001;

app.listen(KEY, () => {
  sequelize.sync({ force: false });
  console.log("listening on port 3001");
});
