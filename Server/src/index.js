const express = require('express');
const server = express();
const cors = require('cors');
const router = require('./routes/index');

const PORT = 3001;

server.use(express.json());
server.use(cors());
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

server.use("/rickandmorty", router);

server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT);
});







/*

const http = require('http');
const getCharById = require('./controllers/getCharById');
//const data = require('./utils/data');

//const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(`Server listening on port ${PORT}`);
    if(req.url.includes('/rickandmorty/character')){
        //     //let id = req.url.split('/').at(-1);
        //     //let id = req.url.split('/')[3];
        let id = req.url.split('/').pop();
        getCharById(res, id)
    //     let personaje = data.filter(personaje => personaje.id === Number(id));
    //     res.writeHead(200, { "Content-Type": "application/json" })
    //     res.end(JSON.stringify(personaje));
    //     console.log(personaje);
    }


}).listen(PORT, "localhost");
*/