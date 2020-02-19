console.log('#### 1. Person Class');
// * Create a class called `Person` which accepts the name of a person as a string, and his/her age as a number. The `Person` class should have a method called describe which returns a string with the following syntax: "name, age years old". So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old".

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        console.log(this.name + ',', this.age, 'years old.');
    }
}

const john = new Person('John', 19);
john.describe();

console.log('#### 2. Volume');
// * Write a JavaScript program to get the volume of a cylinder with four decimal places using a class. 

class Volume {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
    calculation() {
        let resultFirstStep = Math.pow(this.radius, 2) * this.height;
        let resultSecondStep = Math.PI * resultFirstStep;
        return resultSecondStep.toFixed();
    }
}
// * **Note**: Volume of a cylinder : `V = πr^2h` - r is the radius and h is the height of the cylinder.

const cylinder = new Volume(8, 15);
console.log(cylinder.calculation());

console.log('#### 3. Tick Tock');
// Rewrite the following code to use the "class" syntax. 

console.log('#### 4. TV Class');
// * Create a TV class with properties like brand, channel and volume.
// * Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// * Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// * Add a method to set the channel randomly. Let's say the TV has only 50 channels.
// * Add a method to reset TV so it goes back to channel 1 and volume 50. 
// * It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

class Television {
    constructor(brand) {
        this.brand = 'Brand Onwalsh 90210';
        this.channel = 1;
        this.volume = 50;
    }
    volumeSet() {
        return this.volume = Math.floor((Math.random() * 100) + 1)
    }
    setChannel() {
        return this.channel = Math.floor((Math.random() * 50) + 1); // return a random number between 1 and 50
    }
    resetTV() {
        this.channel = 1;
        this.volume = 50;
    }
    status() {
        return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
    }
}

const tvBrand = new Television;
console.log(tvBrand);
console.log(tvBrand.setChannel());
console.log(tvBrand.volumeSet());
console.log(tvBrand.status());