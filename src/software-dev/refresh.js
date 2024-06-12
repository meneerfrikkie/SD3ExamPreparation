// Menu Application
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

const menu = {
    drinks : [],

    addDrink : function(drink) {
        this.drinks.push(drink);
    },

    findDrinksByIngredient : function(ingredient) {
        let drinksWithIngredient = [];

        this.drinks.forEach(drink => {
            if(drink.ingredients.includes(ingredient)) {
                drinksWithIngredient.push(drink.name);
            }
        });

        return drinksWithIngredient;
    }
}

console.log('=== Menu Application ===');
let myMenu = Object.create(menu);

myMenu.addDrink(cocaCola);
myMenu.addDrink(oreoMcFlurry);
myMenu.addDrink(sweetTea);

console.log('Drinks with Ingredient: Sugar');
console.log(myMenu.findDrinksByIngredient('Sugar')); // [ sweetTea ]
console.log('Drinks with Ingredient: Corn Syrup');
console.log(myMenu.findDrinksByIngredient('Corn Syrup')); // [ cocaCola ]

// Electives Application

const electiveOne = {
    courseCode: 'ELEN4010',
    yearOffered: 4
  }

  const electiveTwo = {
    courseCode: 'ELEN4001',
    yearOffered: 4
  }
  const electiveThree = {
    courseCode: 'ELEN4020',
    yearOffered: 4
  }
  const electiveFour = {
    courseCode: 'ELEN4017',
    yearOffered: 4
  }
  
const students = [
    {
      name: 'Kwezi',
      studentNumber: 453528,
      yearOfStudy: 4,
      electives: [electiveOne, electiveTwo, electiveFour]
    },
    {
      name: 'Pieter',
      studentNumber: 454345,
      yearOfStudy: 3,
      electives: [electiveOne]
    },
    {
      name: 'Jade',
      studentNumber: 678345,
      yearOfStudy: 4,
      electives: [electiveTwo, electiveThree, electiveFour]
    },
    {
      name: 'Kiren',
      studentNumber: 567893,
      yearOfStudy: 4,
      electives: [electiveOne, electiveTwo, electiveThree]
    },
  ]

const findCrossYearStudents = students.filter(student =>
    student.yearOfStudy === 3 &&
    student.electives.some(elective => elective.courseCode === 'ELEN4010')
);

const findStudent = (year, courseCode) => student => student.yearOfStudy === year && student.electives.some(elective => elective.courseCode === courseCode);

console.log('=== Electives Application ===');
console.log('Cross Year Students Doing ELEN4010:');
console.log(findCrossYearStudents); // [ Pieter ]
console.log('Students Doing ELEN4010 in Year 4:');
console.log(students.filter(findStudent(4, 'ELEN4010'))); // [ Kwezi Kiren ]

var funcs = [];
for (let i = 0; i < 3; i++) {
  funcs[i] = function() {
    console.log("My value: " + i);
  };
}
for (let j = 0; j < 3; j++) {
  funcs[j]();
}
