const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
    try {
        const { id, name, status, species, gender, origin, image } = req.body;
        if(!name || !status || !species || !gender || !origin || !image){
            return res.status(401).json({ message: "Faltan datos" });
        }
        const [favorite, created] = await Favorite.findOrCreate(
            {
                where: { name },
                defaults: {
                    id,
                    name,
                    status,
                    species,
                    gender,
                    origin,
                    image
                }
            }
        )
        if(created){
            const favorites = await Favorite.findAll();
            return res.status(200).json(favorites);
        } else {
            return res.status(409).json({ message: "Este Character ya esta en Favoritos" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getFav = async (req, res) => {
    try {
        const favorites = await Favorite.findAll();
        return res.status(200).json(favorites);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    postFav,
    getFav
}