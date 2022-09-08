const recipes = [
	{
    id: 1,
		recipeName: 'french cookies',
		recipePhoto: '../img/recipeImages/frenchCookies.webp',
    servings: 36,
		overview: {
			difficulty: 4,
			cost: '€€',
			prepTime: 20,
			cookTime: 12,
			restTime: 10,
		},
    ingredients: [
      {id: 1, ingredient: "egg yolk", quantity: 1, metric: "piece"},
      {id: 2, ingredient: "chocolate", quantity: 85, metric: "gram"},
      {id: 3, ingredient: "flour", quantity: 175, metric: "gram"},
      {id: 4, ingredient: "milk", quantity: 25, metric: "cl"},
    ],
	},
	{
    id: 2,
		recipeName: 'French Fries',
		recipePhoto: '../img/recipeImages/frenchFries.webp',
    servings: 8,
		overview: {
			difficulty: 2,
			cost: '€',
			prepTime: 20,
			cookTime: 30,
			restTime: 5,
		},
    ingredients: [
      {id: 1, ingredient: "potatoes", quantity: 5, metric: "pieces"},
      {id: 2, ingredient: "sea salt", quantity: 4, metric: "gram"},
      {id: 3, ingredient: "mayonaise", quantity: 25, metric: "gram"},
      {id: 4, ingredient: "oil", quantity: 100, metric: "cl"},
    ],
	},
];

export { recipes };