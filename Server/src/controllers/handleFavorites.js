let myFavorites2 = [];

const postFav = (req, res) => {
    const characterFound = myFavorites2.find(character => character.id === req.body.id);
    if(characterFound){
        res.status(400).json({error:"Character ya esta en favoritos"})
    } else {
        myFavorites2.push(req.body)
        res.status(201).json(myFavorites2);
    }
    //console.log(myFavorites2);
};

const deleteFav = (req, res) => {
    const {id} =req.params;
    myFavorites2 = myFavorites2.filter(character =>
        character.id !== Number(id));
        res.json(myFavorites2)
        //console.log(myFavorites2);
}

module.exports = {
    postFav,
    deleteFav
}