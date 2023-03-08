

const http = require ('http');
const getCharById = require('../controllers/getCharById')
const getCharDetail = require ('../controllers/getCharDetail')

http.createServer((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*')

    let id = req.url.split('/').at(-1);
    
    if(req.url.includes('onsearch')){
        getCharById(res, id)
    }
    if(req.url.includes('detail')){
        getCharDetail(res, id)
    }

}).listen(3001, 'localhost');


// const characters = require('../utils/data');

// http.createServer((req, res) =>{
//     res.setHeader('Access-Control-Allow-Origin', '*')
    
//     if(req.url.includes('rickandmorty/character')){
//         let id = req.url.split('/').at(-1);
//             let characterFilter = characters.filter(char => char.id === Number(id))//* -- Devuelve un array con el obj dentro.
//         let characterFilter = characters.find(char => char.id === Number(id))     //* -- Devuelve directamente el obj.

//         res.writeHead(200, {"Content-type" : "application/json"}).end(JSON.stringify(characterFilter))
//     }
// }).listen(3001, 'localhost');