import { recipes } from './recipes.mjs';

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function getRandomRecipe(recipes) {
    const randomIndex = getRandomNumber(recipes.length);
    return recipes[randomIndex];
}

function createTagsHTML(tags) {
    return tags.map(tag => `<span class="tag">${tag}</span>`).join('');
}

function createRatingHTML(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '<span aria-hidden="true" class="icon-star">⭐</span>' : '<span aria-hidden="true" class="icon-star-empty">☆</span>';
    }
    return stars;
}

function createRecipeHTML(recipe) {
    return `
        <div class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="info">
                <div class="tags">
                    ${createTagsHTML(recipe.tags)}
                </div>
                <h2>${recipe.name}</h2>
                <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${createRatingHTML(recipe.rating)}
                </div>
                <p>${recipe.description}</p>
            </div>
        </div>
    `;
}

function filterRecipes(query) {
    const filtered = recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
            recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query))
        );
    });
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
    e.preventDefault();
    const query = document.querySelector('input[name="q"]').value.toLowerCase();
    const filteredRecipes = filterRecipes(query);
    const mainElement = document.querySelector('main');
    mainElement.classList.add('search-results');

    mainElement.innerHTML = filteredRecipes.map(createRecipeHTML).join('');
}

function init() {
    const randomRecipe = getRandomRecipe(recipes);
    const mainElement = document.querySelector('main');
    mainElement.classList.remove('search-results');
    mainElement.innerHTML = createRecipeHTML(randomRecipe);

    const searchButton = document.querySelector('button[type="submit"]');
    searchButton.addEventListener('click', searchHandler);
}

window.addEventListener('load', init);
