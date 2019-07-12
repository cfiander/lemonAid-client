import config from '../config'

const RecipesApiService = {
    getRecipes(ingredients) {
        return fetch(`${config.API_ENDPOINT}/recipes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
              },
            body: JSON.stringify({
                ingredients,
            }),
        })
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
    formatIngredients(ingredients) {
        const nameArray = ingredients.map(ingredient => {
            return ingredient.name
        })
        const joinedQuery = nameArray.join('%2C')
        return joinedQuery;
    },
    buildUrl(url, parameters) {
        let qs = "";
        for (const key in parameters) {
            if (parameters.hasOwnProperty(key)) {
                const value = parameters[key];
                qs +=
                    encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
            }
        }
        if (qs.length > 0) {
            qs = qs.substring(0, qs.length - 1); //chop off last "&"
            url = url + "?" + qs;
        }
    
        return url;
    },
    getRecipeURL(recipeId) {
        return fetch(`${config.API_ENDPOINT}/recipes/url`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
              },
            body: JSON.stringify({
                recipeId,
            }),
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
}

export default RecipesApiService

