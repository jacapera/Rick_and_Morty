const { User } = require('../DB_connection');


const postUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({message: 'Faltan datos'});
        }
        const [user, created] = await User.findOrCreate(
            {
                where: { email, password },
                defaults: { email, password }
            }
        )
        if(created){
            return res.status(201).json({message: 'Usuario creado con exito', user})
        } else {
            return res.status(409).json({ message: 'El usuario ya existe' });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

};

module.exports = postUser;