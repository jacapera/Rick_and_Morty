const { Favorite } = require('../DB_connection');

const deleteFav = async (req, res) => {
    try {
        const { id } = req.params;
        const favoriteDeleted = await Favorite.destroy(
            { where: { id } }
        )
        if(favoriteDeleted > 0){
            const favorites = await Favorite.findAll();
            return res.status(200).json(favorites);
        } else {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = deleteFav;