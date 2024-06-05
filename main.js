// Object: drinks

const drinks = {
  // Property names are the names of the drinks, each drink is a key-value pair
  // The value is an object with properties for ingredients, prices, and calories
  'Coca-Cola': {
    ingredients: 'Carbonated Water, Corn Syrup, Natural Flavours',
    prices: {
      Small: 'R12.00',
      Medium: 'R14.00',
      Large: 'R16.00'
    },
    calories: {
      Small: 140,
      Medium: 200,
      Large: 280
    }
  },
  'Oreo McFlurry': {
    ingredients: 'Vanilla Soft Serve, Oreo Cookies',
    prices: {
      Small: 'R22.00',
      Medium: 'R24.00',
      Large: 'R28.00'
    },
    calories: {
      Small: 400,
      Medium: 500,
      Large: 600
    }
  },
  'Sweet Tea': {
    ingredients: 'Water, Sugar, Black Tea',
    prices: {
      Small: 'R12.00',
      Medium: 'R14.00',
      Large: 'R16.00'
    },
    calories: {
      Small: 90,
      Medium: 130,
      Large: 180
    }
  }
}

// Print the drinks object to show the structure
console.log(drinks)

// Accessing Sweet Tea information
const sweetTeaInfo = drinks['Sweet Tea'] // Access by property name in string quotes

console.log('Sweet Tea Ingredients:', sweetTeaInfo.ingredients)
console.log('Sweet Tea Prices:', sweetTeaInfo.prices)
console.log('Sweet Tea Calories:', sweetTeaInfo.calories)
