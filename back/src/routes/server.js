
const PORT = 3001; 
const { sequelize } = require("../DB_connection.js");
const saveApiData = require("../controllers/saveApiData");
const app = require("../app.js");

app.listen(PORT, async () => {
    await sequelize.sync({force: true});
    await saveApiData();
    console.log("Server raised in port " + PORT);
});
