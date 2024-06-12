// Drink objects
const cocaCola = {
  name: 'Coca-Cola',
  ingredients: ['Carbonated Water', 'Corn Syrup', 'Natural Flavours'],
  prices: {
    small: 12.00,
    medium: 14.00,
    large: 16.00
  },
  calories: {
    small: 140,
    medium: 200,
    large: 280
  }
}

const oreoMcFlurry = {
  name: 'Oreo McFlurry',
  ingredients: ['Vanilla Soft Serve', 'Oreo Cookies'],
  prices: {
    small: 22.00,
    medium: 24.00,
    large: 28.00
  },
  calories: {
    small: 400,
    medium: 500,
    large: 600
  }
}

const sweetTea = {
  name: 'Sweet Tea',
  ingredients: ['Water', 'Sugar', 'Black Tea'],
  prices: {
    small: 12.00,
    medium: 14.00,
    large: 16.00
  },
  calories: {
    small: 90,
    medium: 130,
    large: 180
  }
}

// Menu object
const menu = {
  // 'drinks' is a property of 'menu' object, initialized as an empty array
  drinks: [],

  // 'addDrink' is a method of 'menu' object, it takes a 'drink' as a parameter
  addDrink: function (drink) {
    // The 'drink' parameter is added to the 'drinks' array using the 'push' method
    this.drinks.push(drink)
  },

  // 'findDrinksByIngredient' is a method of 'menu' object, it takes an 'ingredient' as a parameter
  findDrinksByIngredient: function (ingredient) {
    // Initialize an empty array to store drinks that include the specified 'ingredient'
    const drinksWithIngredient = []

    // Use a 'for' loop to iterate over each 'drink' in the 'drinks' array
    for (let i = 0; i < this.drinks.length; i++) {
      // If the 'ingredients' property of the current 'drink' includes the specified 'ingredient', add the 'drink' to the 'drinksWithIngredient' array
      if (this.drinks[i].ingredients.includes(ingredient)) {
        drinksWithIngredient.push(this.drinks[i])
      }
    }

    // Return the 'drinksWithIngredient' array
    return drinksWithIngredient
  }
}

// Create a menu object
const myMenu = Object.create(menu)

// Add drinks to the menu
myMenu.addDrink(cocaCola)
myMenu.addDrink(oreoMcFlurry)
myMenu.addDrink(sweetTea)

// Search for drinks containing "Sugar" and log the results
const drinksWithSugar = myMenu.findDrinksByIngredient('Sugar')
console.log(drinksWithSugar)

// Test print of the drinks in the menu
console.log('Menu Items:', myMenu.drinks)
