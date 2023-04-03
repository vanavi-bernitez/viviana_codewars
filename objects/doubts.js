// let spaceship = {
//     crew: {
//     captain: { 
//         name: 'Lily', 
//         degree: 'Computer Engineering', 
//         cheerTeam() { console.log('You got this!') } 
//         },
//     'chief officer': { 
//         name: 'Dan', 
//         degree: 'Aerospace Engineering', 
//         agree() { console.log('I agree, captain!') } 
//         },
//     medic: { 
//         name: 'Clementine', 
//         degree: 'Physics', 
//         announce() { console.log(`Jets on!`) } },
//     translator: {
//         name: 'Shauna', 
//         degree: 'Conservation Science', 
//         powerFuel() { console.log('The tank is full!') } 
//         }
//     }
// }; 

// for (let crewMember in spaceship.crew) {
//   console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
// }



// const person = {
//     name: "John",
//     sayName(name) {
//       console.log(`My name is ${this.name}.`);
//     }
//   };
  
//   person.sayName(); // logs "My name is John."


//   let anotherPerson = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greet: function () {
//         console.log('Hello, World!');
//     },
//     getFullName: function () {
//         return this.firstName + ' ' + this.lastName;
//     }
// };


// console.log(anotherPerson.getFullName());






// const modifyName = (obj) => {
//     // this.name = 'Checo'
//     obj.name = 'Checo'
// }

// const myObject = {
//     name: 'Pedro',
//     lastName: 'Perez'
// }

// modifyName(myObject);

// console.log(myObject);




var decoration = {
    color: 'red'
};

var circle = Object.create(decoration);
circle.radius = 10;


for(const prop in circle) {
    console.log(prop);
}
for(const prop in circle) {
    if(circle.hasOwnProperty(prop)) {
        console.log(prop);
    }
}