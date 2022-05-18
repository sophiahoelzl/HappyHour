const fetch = require("node-fetch");

class Cocktail {
    constructor(idDrink, strDrink, strDrinkAlternate, strTags, strVideo,
        strCategory, strIBA, strAlcoholic, strGlass, strInstructions,
        strInstructionsES, strInstructionsDE, strInstructionsFR,
        strInstructionsIT, strInstructionsZH_HANS, strInstructionsZH_HANT,
        strDrinkThumb, strIngredient1, strIngredient2, strIngredient3,
        strIngredient4, strIngredient5, strIngredient6, strIngredient7,
        strIngredient8, strIngredient9, strIngredient10, strIngredient11,
        strIngredient12, strIngredient13, strIngredient14, strIngredient15,
        strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5,
        strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10,
        strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15,
        strImageSource, strImageAttribution, strCreativeCommonsConfirmed,
        dateModified) {
        //this.id = idDrink;
        this.strDrink = strDrink;
        this.strDrinkThumb = strDrinkThumb;
    }
}

class CocktailModel {
    static COCKTAIL_ID = 0;

    constructor() {
        this.cocktails = new Map();
    }

    addCocktail(cocktail) {
        cocktail.id = CocktailModel.COCKTAIL_ID++;
        this.cocktails.set(cocktail.id, cocktail);
    }

    getCocktails() {
        return Array.from(this.cocktails);
    }
}

const model = new CocktailModel();

fetch('http://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then(cocktails => {
        for (let cocktail of Array.from(cocktails.drinks)) {
            model.addCocktail(cocktail);
        }
    })
    .catch(err => console.error(`Fetch problem: ${err.message}`));

module.exports = model;