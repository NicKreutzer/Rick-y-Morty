
const express = require("express");
const server = express();
const PORT = 3001; 
const cors = require("cors");
const {router} = require("./index.js");

// Configuración con problema de CORS
// npm install cors --save
// ---
const corsOptions = {
    origin: "*",
    credentials: true, // access-control-allow-credentials: true
    optionSuccessStatus: 200,
};
server.use(cors(corsOptions)); // Use this after the variable declaration


server.use(express.json());

server.use("/", router);

server.listen(PORT, () => {
    console.log("Server raised in port " + PORT);
});


// const http = require ('http');
// const getCharById = require('../controllers/getCharById')
// const getCharDetail = require ('../controllers/getCharDetail')

// http.createServer((req, res) =>{
//     res.setHeader('Access-Control-Allow-Origin', '*')

//     let id = req.url.split('/').at(-1);
    
//     if(req.url.includes('onsearch')){
//         getCharById(res, id)
//     }
//     if(req.url.includes('detail')){
//         getCharDetail(res, id)
//     }

// }).listen(3001, 'localhost');

