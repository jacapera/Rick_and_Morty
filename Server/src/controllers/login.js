const users = require('../utils/users');

const login = (req, res) => {
    const {email, password} = req.query;
    const userFiltered = users.filter(user =>
        user.email === email && user.password === Number(password));
    if(userFiltered.length){
        res.status(200).json({access: true});
    } else {
        res.status(200).json({access: false});
    }
};


module.exports = login;



