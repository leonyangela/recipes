import axios from 'axios';

export default class Search {

    constructor(query) {
        this.query = query;
    }

    async getResults(query) {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.result = res.data.recipes;
        } catch (error) {
            console.log(error);
        }
    }
}


// similiar to food2fork api
// https://api.spoonacular.com/recipes/search
// https://spoonacular.com/food-api/docs
