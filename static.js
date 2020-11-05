class Animal {
    static category = 'Dog';
    location = 'Sundorbon';
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    static compare(animal1, animal2) {
        if(animal1.speed > animal2.speed) {
            return `${animal1.name} is Faster.`;
        }
        return `${animal2.name} is Faster.`;
    }
}

const myRat = new Animal('rat', 120);
const myDog = new Animal('dog', 50);
console.log(myRat.category);
console.log(myRat.location);
console.log(Animal.category);
console.log(Animal.location);
console.log(Animal.compare(myRat, myDog));