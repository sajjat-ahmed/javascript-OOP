class Animal {
    static category = 'Dog';
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

const myRat = new Animal('rat', 12);
console.log(myRat);