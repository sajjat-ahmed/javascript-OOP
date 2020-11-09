function Cat(name) {
    this.name = name;
}

Cat.prototype.talk = function() {
    console.log('meow meow');
}

const myCat = new Cat('Tom');
console.log(myCat);
myCat.talk();


// npx create-react-app ReactApp
// npm react-native init ReactNativeApp
// npm install @material-ui/core @material-ui/icons
// npm install firebase firebase-tools firebase-hooks
// npm init --y | npm install express mongodb cors body-parser
// yarn add firebase firebase-tools firebase-hooks
// npm init --y
// OOP => Object Oriented Programming
// Data Structure and Algorithon