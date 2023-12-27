const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    "age" : 56,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

//   accessing to property by dot notation 

let firstName = person.firstName;
console.log(firstName);

// accessing to property by bracket notation

let lastName = person["lastName"];
console.log(lastName);

let fullName =  firstName + " " + lastName;
console.log(fullName);

//dynamically accessing to property  by a variable

let firstName2 = "firstName";
console.log(person[firstName2]);

// object method

console.log(person.fullName()) 
console.log(person.fullName)
