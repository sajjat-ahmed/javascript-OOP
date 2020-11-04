class SmartDevice {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    charging() {
        console.log('I am eating electrons... they yummy');
    }
}

class Phone extends SmartDevice {
    constructor(name, price, camera) {
        super(name, price);
        this.camera = camera;
    }
    sendSMS() {
        console.log('I am sending text to my friend.');
    }
}

class Watch extends SmartDevice {
    constructor(name, price, distance) {
        super(name, price);
        this.distance = distance;
    }
}

class Tablet extends SmartDevice {
    constructor(name, price, isWifi) {
        super(name, price);
        this.isWifi = isWifi;
    }
}

const samsung = new Phone('Samsung', 60000, '16MP');
console.log(samsung);
samsung.sendSMS();

const iPad = new Tablet('Apple', 60000, true);
console.log(iPad);
iPad.charging();