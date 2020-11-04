// class using class syntex
class PenDrive {
    constructor(capacity, color, price) {
        this.capacity = capacity;
        this.color = color;
        this.price = price;
    }
}

const penDrive1 = new PenDrive('8GB', 'white', 400);
console.log(penDrive1);

const penDrive2 = new PenDrive('16GB', 'black');
console.log(penDrive2);


// class using function syntax
function StickyNote(color, price) {
    this.color = color;
    this.price = price;
}

const yellow = new StickyNote('yello', 40);
console.log(yellow);