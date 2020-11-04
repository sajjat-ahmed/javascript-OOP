const person = {
    firstName: "Sajjat",
    lastName: "Ahmed",
    age: 16,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person);