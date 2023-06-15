const { User } = require('../DB_connection');


const login = async (req, res) => {
    try {
        const { email, password } = req.query;
        if(!email || !password){
            return res.status(400).json({ message: 'Faltan datos' });
        }
        const userFound = await User.findOne({ where: { email } });
        if(userFound){
            if(userFound.password === password){
                res.status(200).json({ access: true });
            } else {
                return res.status(403).json({ message: "Contraseña incorrecta" });
            }
        } else {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};


module.exports = login;