// dzień 2, z.1

const country = {
    capital: 'Warsaw',
    population: 37.8,
    president: 'Andrew D.',
    ministers: ['Sasin', 'Niedzielski']
}

// console.log(country.capital, country.population, country.president);

// dzień 2, z.2

const timeMachine = {
    shape: 'square',
    model: 'Delorean',
    run(date, place) {
        // template literal string lub concatenation
        return `Jesteś w ${place}, data: ${date}`
    }
}

// console.log(
//     timeMachine.shape,
//     timeMachine.model,
//     timeMachine.run('29.02.2028', 'Bieszczady')
// )


// dzień 2, z.4

const person = {
    name: 'Janusz K',
    age: 44,
    sayHello() {
        console.log('hello')
    }
}

// console.log(
//     person.name,
//     person.age
// )
//
// person.sayHello();


// dzień 2, z.5

const favouriteRecipe = {
    title: 'boiled water',
    servings: 4
}

favouriteRecipe.ingredients = ['water'];
// favouriteRecipe.ingredients.push('eggs')

// console.log(
//     favouriteRecipe.title,
//     favouriteRecipe['servings'],
//     favouriteRecipe.ingredients
// )

// this

const user = {
    name: 'Janusz',
    age: 44,
    getName() {
        return this.name;
    }
}

// console.log(user.getName())
//
// console.log(user.getName.call({name: 'Andrzej'}))
//
// const getName2 = user.getName.bind({name: 'Janusz 2'})
// console.log(getName2())


// dzień 2, z.1 this

const car = {
    brand: 'Łada',
    color: 'Black',
    numberOfKilometers: 0,
    printCarInfo() {
        console.log(`${this.color} ${this.brand}, ${this.numberOfKilometers}km`)
        // console.log(this.color + ' ' + this.brand + ', ' + this.numberOfKilometers + 'km' )
    },
    drive(km) {
        this.numberOfKilometers += km;
    }
}

// car.printCarInfo();
// car.drive(240);
// car.printCarInfo();

// dzień 2, z.2 this
const calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },
    sum() {
        return this.a + this.b;
    },
    multiply() {
        return this.a * this.b;
    }
};

// calculator.save(2, 3);
// console.log(calculator.sum());
// console.log(calculator.multiply());

// dzień 2, z.3 this

const stairs = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    printStep() {
        console.log(this.step);
    }
}

// stairs.up();
// stairs.up();
// stairs.up();
// stairs.down();
// stairs.printStep()


function User(name) {
    this.name = name;
    this.capitalize = function () {
        return this.name[0].toUpperCase() + this.name.slice(1);
    }
}

User.prototype.capitalize = function () {
    return this.name[0].toUpperCase() + this.name.slice(1);
}

// console.dir(User);

// const janusz = new User('Janusz');
// const ala = new User('Ala');
// console.log(janusz);
// console.log(ala);

function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1);
}

String.prototype.capitalize = function () {
    return this[0].toUpperCase() + this.slice(1);
}


Array.prototype.myMap = function (cb) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        const newValue = cb(this[i], i, this);
        newArray.push(newValue);
    }

    return newArray;
}

// dzień 2, z.1 constructor

function Basket() {
    this.products = [];
    this.sum = 0;
}

Basket.prototype.addProduct = function (name, price) {
    // shorthand object notation
    this.products.push({
        name, price
    });

    this.sum += price;
}

Basket.prototype.showBasket = function () {
    const formattedProducts = this.products.map((product) => `${product.name}: ${product.price}zł`);
    console.log('-'.repeat(20))
    console.log('Koszyk:');
    console.log(formattedProducts.join(', '));
    console.log(`Suma: ${this.sum}zł`);
}

// const aliceBasket = new Basket();
// aliceBasket.addProduct("pomidor",10);
// aliceBasket.addProduct("arbuz",40);
// aliceBasket.showBasket();
//
// const bruceBasket = new Basket();
// bruceBasket.addProduct("rice", 10);
// bruceBasket.addProduct("grzyby mun",50);
// bruceBasket.addProduct("tofu",20);
// bruceBasket.showBasket();


// dzień 2, z.2 constructor
const Robot = function (name) {
    this.name = name;
    this.isFunctional = false;
};

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional) {
        console.log("Robot " + this.name + " greets " + toWho);
    } else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newName) {
    console.log("Robot " + this.name + " changes name to " + newName);
    this.name = newName;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

// const sophia = new Robot('Sophia');
// sophia.sayHi('Januszowi');
// sophia.changeName('Sophia 2');
// sophia.fixIt();
// sophia.sayHi('Januszowi');

// dzień 2, z.3 constructor

function Calculator() {
    this.operationsHistory = [];
}

Calculator.prototype.add = function (num1, num2) {
    const result = num1 + num2;
    // backtick
    this.operationsHistory.push(`added ${num1} to ${num2} got ${result}`);
    return result;
}

Calculator.prototype.multiply = function (num1, num2) {
    const result = num1 * num2;
    // backtick
    this.operationsHistory.push(`multiplied ${num1} with ${num2} got ${result}`);
    return result;
}

Calculator.prototype.subtract = function (num1, num2) {
    const result = num1 - num2;
    // backtick
    this.operationsHistory.push(`subtracted ${num1} from ${num2} got ${result}`);
    return result;
}

Calculator.prototype.divide = function (num1, num2) {
    const result = num1 / num2;
    // backtick
    this.operationsHistory.push(`divided ${num1} by ${num2} got ${result}`);
    return result;
}

Calculator.prototype.printOperations = function () {
    const formattedData = this.operationsHistory
        .map((operation, index) => `${index + 1}. ${operation}`);

    console.log(formattedData.join('\n'));
}

Calculator.prototype.clearOperations = function () {
    this.operationsHistory = [];
}

const casio = new Calculator();

// casio.add(1, 2);
// casio.add(0.1, 0.2);
// casio.subtract(0.1, 0.2);
// casio.divide(0.1, 0.2);
// casio.multiply(0.1, 0.2);
//
// casio.printOperations();
// casio.clearOperations();
// casio.printOperations();



















