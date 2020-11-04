class Tiger {
    #speed = 100;
    location = 'Sundorbon';
    constructor(name) {
        this.name = name;
        this.#speed = 125;
    }
    run() {
        console.log(`I am ${this.name}. I am running at ${this.#speed}mph. I live in ${this.location}.`);
    }
}

const tiger = new Tiger('Royal Dengal');
tiger.name = 'Tiger';
tiger.location = 'Borishal';
tiger.run();