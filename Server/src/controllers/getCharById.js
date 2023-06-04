const axios = require('axios');


const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) => {
    try {
        const {id} = req.params;
        //if(id && req.url.includes("/rickandmorty/character")){
            axios.get(URL + id )
                .then(response => {
                    const character = {
                        id: response.data.id,
                        name: response.data.name,
                        gender: response.data.gender,
                        species: response.data.species,
                        origin: response.data.origin,
                        image: response.data.image,
                        status: response.data.status,
                        location: response.data.location
                    }
                    res.status(200).json(character)
                },
                    error => res.status(404).json({error: "Not found"}));
       // }//else {
           // }
    } catch (error) {
        console.log("entre aqui al catch")
        res.status(500).json({message: error.message});
    }
};

module.exports = getCharById;

/*
const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            //console.log(response.data)
            //console.log(character)
            res.writeHead(200, { "Content-Type": "application/json"})
            res.end(JSON.stringify(character));
        }).catch(err => {
            res.writeHead(500, { "Content-Type":"text/plain" })
            res.end(`El personaje con Id ${id} no se encuentra`);
    })
}

module.exports = getCharById;

*/