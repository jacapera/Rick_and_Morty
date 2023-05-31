const http = require('http');
const data = require('./utils/data');

const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(`Server listening on port ${PORT}`);
    if(req.url.includes('/rickandmorty/character')){
        //let id = req.url.split('/').at(-1);
        //let id = req.url.split('/')[3];
        let id = req.url.split('/').pop();
        let personaje = data.filter(personaje => personaje.id === Number(id));
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(personaje));
        console.log(personaje);
    }


}).listen(PORT, "localhost");