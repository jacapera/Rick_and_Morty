const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await axios(URL + id);
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
        res.status(200).json(character);
    } catch (error) {
        res.status(500).json(error.message)
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