
const PORT = 3001; 
const { sequelize } = require("../DB_connection.js");
const saveApiData = require("../controllers/saveApiData");
const app = require("../app.js");

// Configuración con problema de CORS
// npm install cors --save
// ---
const corsOptions = {
    origin: "*",
    credentials: true, // access-control-allow-credentials: true
    optionSuccessStatus: 200,
};

app.listen(PORT, async () => {
    await sequelize.sync({force: true});
    await saveApiData();
    console.log("Server raised in port " + PORT);
});
