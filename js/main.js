import { recipes } from '../data/recipes.js';

// const Capitalize = (str) => {
// 	return str.charAt(0).toUpperCase() + str.slice(1);
// };

/**
 * Captialises the first letter of each word in a string
 * @function CapitalizeEachWord
 * @param {string} str: string to be captialized
 * @return {string} captialized Words
 */
const CapitalizeEachWord = (str) => {
	const captializedWords = str.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
		letter.toUpperCase()
	);
	return captializedWords;
};

/**
 * Converts a sring to lower case & then concatenates the words
 * @function ConcatString
 * @param {string} str: string to be concatenated & change to lower case
 * @return {string} captialized Words
 */
const ConcatString = (str) => {
	return str.replace(/\s/g, '').toLowerCase();
};

/**
 * @function CreateHeading
 * @param {object} recipe
 * @return {HTML} recipe banner, heading
 */
const CreateHeading = (recipe) => {
	const bannerImage = document.getElementById('bannerImage');
	bannerImage.innerHTML = `<img class="recipe" src=${recipe.recipePhoto} alt="" />`;
	const recipeTitle = document.getElementById('recipeTitle');
	recipeTitle.innerText = `${recipe.recipeName}`;
};

/**
 * @function CreateOverview
 * @param {object} recipe
 * @return {HTML} recipe overview information
 */
const CreateOverview = (recipe) => {
	const range = [1, 2, 3, 4, 5];
	const overviewElement = document.getElementById('overview');
	overviewElement.innerHTML = `
    <div>
      <span class="item difficulty">
        <span class="starContainer">${range
					.map((rangeElem) =>
						recipe.overview.difficulty >= rangeElem
							? `<img className='star' src='../img/icons/starSolid.svg' alt='' />`
							: `<img className='star' src='../img/icons/starClear.svg' alt='' />`
					)
					.join('')} </span>

      </span>
      <span>Difficulty</span>
    </div>

    <div class="items">
      <span class="item">
        <span>${recipe.overview.cost}</span>
      </span>
      <span>Cost</span>
    </div>

    <div class="items">
      <span class="item">
        <span>${recipe.overview.prepTime} mn</span>
      </span>
      <span>Preparation Time</span>
    </div>

    <div class="items">
      <span class="item">
        <span>${recipe.overview.cookTime} mn</span>
      </span>
      <span>Cooking Time</span>
    </div>

    <div class="items">
      <span class="item">
        <span>${recipe.overview.restTime} mn</span>
      </span>
      <span>Resting Time</span>
    </div>
 `;
};

/**
 * Add listeners to the servings +/- buttons &
 * serving button functionality to change nos of servings in table
 * @function CreateBtnFunctionality
 * @param {object} recipe
 */
const CreateBtnFunctionality = (recipe) => {
	const addBtn = document.getElementById('add');
	const subtractBtn = document.getElementById('subtract');
	let nosOfServings;
	const servings = document.getElementById('servings');
	servings.innerText = recipe.servings;

	addBtn.addEventListener('click', () => {
		nosOfServings = +servings.innerText + 1;
		servings.innerText = nosOfServings;
		CreateIngredients(recipe, nosOfServings);
	});

	subtractBtn.addEventListener('click', () => {
		if (servings.innerText > 1) {
			nosOfServings = +servings.innerText - 1;
			servings.innerText = nosOfServings;
			CreateIngredients(recipe, nosOfServings);
		}
	});
};

/**
 * @function CreateIngredients
 * @param {object} recipe
 * @param {undefined/number} nosOfServings
 * @return {HTML} ingredients quantity table
 */
const CreateIngredients = (recipe, nosOfServings) => {
	const { ingredients } = recipe;
	const nosOfPeople = nosOfServings ? nosOfServings : recipe.servings;

	const ingredientsElement = document.getElementById('ingredients');
	let ingredientHtml = `
  <tr>
    <th>#</th>
    <th>Name</th>
    <th>Quantity</th>
    <th>Metric</th>
  </tr>
`;

	ingredients.forEach((ingredient) => {
		ingredientHtml += `
   <tr>
    <td>${ingredient.id}</td>
    <td>${CapitalizeEachWord(ingredient.ingredient)}</td>
    <td>${Math.round((ingredient.quantity / recipe.servings) * nosOfPeople)}</td>
    <td>${CapitalizeEachWord(ingredient.metric)}</td>
  </tr>
 `;
		ingredientsElement.innerHTML = ingredientHtml;
	});
};

/* execute above functions*/

/* the param could be picked up from the URL & then each recipe page could be generated dynamically.... */
const param = 'French fries';
const recipe =
	recipes[
		recipes.map((e) => ConcatString(e.recipeName)).indexOf(ConcatString(param))
	];

CreateHeading(recipe);
CreateOverview(recipe);
CreateBtnFunctionality(recipe);
CreateIngredients(recipe);
