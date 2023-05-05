
class Hamburger {
    constructor(size) {
        this.size = size;
        this.price = 0;
        this.calories = 0;
        this.options = {
            cheese: { price: 10, calories: 20 },
            lettuce: { price: 20, calories: 5 },
            potatoes: { price: 15, calories: 10 },
            spices: { price: 15, calories: 0 },
            mayo: { price: 20, calories: 5 },
        };
        this.calculateInitialPriceAndCalories();
    }

    calculateInitialPriceAndCalories() {
        if (this.size === "small") {
            this.price = 50;
            this.calories = 20;
        } else if (this.size === "large") {
            this.price = 100;
            this.calories = 40;
        }
    }

    addOption(option) {
        if (this.options[option]) {
            this.price += this.options[option].price;
            this.calories += this.options[option].calories;
        }
    }

    getTotalPrice() {
        return this.price;
    }

    getTotalCalories() {
        return this.calories;
    }
}


const hamburger = new Hamburger("small");
hamburger.addOption("cheese");
hamburger.addOption("spices");

console.log("Price:", hamburger.getTotalPrice());
console.log("Calories:", hamburger.getTotalCalories());