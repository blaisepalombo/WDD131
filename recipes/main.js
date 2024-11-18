import { recipes } from './recipes.mjs';

const recipeCardsContainer = document.getElementById('recipe-card');

// Function to render a single recipe card
function renderRecipeCard(recipe) {
  return `
    <div class="recipe-card">
      <img src="${recipe.image}" alt="${recipe.name}">
      <div class="recipe-info">
        <h3>${recipe.name}</h3>
        <p class="description">${recipe.description}</p>
        <p class="stars">${'⭐'.repeat(Math.floor(recipe.rating))}${recipe.rating % 1 !== 0 ? '½' : ''}</p>
        <p><strong>Prep Time:</strong> ${recipe.prepTime}</p>
      </div>
    </div>
  `;
}

// Function to render all recipes dynamically
function renderRecipes() {
  const recipeCardsHTML = recipes.map(renderRecipeCard).join('');
  recipeCardsContainer.innerHTML = recipeCardsHTML;
}

// Initialize the page
renderRecipes();
