class Hero {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
    getPower() {
        if(this.power) {
            return this.power;
        }
        return 'I have no power';
    }
    goForGrocery(budget) {
        if(this.power && budget > 5000) {
            return 'Peice is too high, I can not buy.'
        } else {
            return 'Success';
        }
    }
}

const catMan = new Hero('catman', 'khamsi');
console.log(catMan.power);
console.log(catMan.getPower());
console.log(catMan.goForGrocery(10000));