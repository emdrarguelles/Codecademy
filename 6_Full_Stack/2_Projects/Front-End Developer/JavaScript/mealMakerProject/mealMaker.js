// the menu object to update meal and price with get and set
const menu = {
  _meal: '',
  _price: 0,

  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      this._meal = mealToCheck;
    } else {
      console.log('Meal item needs to be a string.');
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      this._price = priceToCheck;
    } else {
      console.log('Price of meal needs to be a number.');
    }
  },

  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}!`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  }
};

//extend learning adding random set
const meals = ['Waffles', 'Pancakes', 'Bacon', 'Muffins']
const prices = [90, 75, 120, 95]

const randomize = (arr) => Math.floor(Math.random() * arr.length);

const index = randomize(meals);
menu.meal = meals[index];
menu.price = prices[index];

console.log(menu.todaysSpecial);