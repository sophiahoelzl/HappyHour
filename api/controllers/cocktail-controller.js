const model = require("../models/cocktail-model");

class CocktailController {
    getCocktails = (req, res) => {
        res.send(model.getCocktails());
    }
}

module.exports = new CocktailController();