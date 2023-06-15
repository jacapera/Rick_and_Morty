const axios = require('axios');
const { Character } = require('../DB_connection');

const getApiData = async () => {
    try {
        let allCharacters = [];
        for(let i = 1; i < 6; i++){
            let apiData = await axios(`https://rickandmortyapi.com/api/character?page=${i}`);
            const pageCharacters = apiData.data.results.map( char => {
                return {
                    id: char.id,
                    name: char.name,
                    status: char.status,
                    species: char.species,
                    gender: char.gender,
                    origin: char.origin?.name,
                    image: char.image
                }
            });
            allCharacters = [...allCharacters, ...pageCharacters];
        }
        return allCharacters;
    } catch (error) {
        return { msg: error.message };
    }
};

const saveApiData = async () => {
    try {
        let allCharacters = await getApiData();
        await Character.bulkCreate(allCharacters);
        return allCharacters;
    } catch (error) {
        return { msg: error.message };
    }
};

module.exports = saveApiData;