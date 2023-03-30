// const outsideFunc = nestedArray => {
//     const largestNumbers = nestedArray.forEach(element => {
//         Math.max(...element);
//     } );
//     return largestNumbers;
// }
// console.log(outsideFunc([[1, 2], [3, 4, 5], [6, 7, 8, 9]]));
//returns UNDEFINED    NO ES NECESARIO PORQUE SE ESTA HACIENDO SOBRE EL MISMO ARREGLO 

// const outsideFunc = nestedArray => {
//     const largestNumbers = nestedArray.map((element) => {
//         return Math.max(...element)
//     });
//     // return largestNumbers;
// }
// console.log(outsideFunc([[1, 2], [3, 4, 5], [6, 7, 8, 9]]));

//returns [ undefined, undefined, undefined ] para que funcione tengo que retornar el map
// returns [2, 5, 9] without the {} from the callback function


const x = [1,2,3,4,5,6,10];
const newArray = x.map((element) => {
    if (element >= 4) {
        return element*2;
    }
    return element;
})


// function wave(str){
//     let upperLetter = [];
    
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== ' ')  {
//             let changeNumber = str.slice(0, i) + str[i].toUpperCase() + str.slice(i+1);
//             upperLetter.push(changeNumber);

//         }    
//     }
//     return upperLetter
// }
//   console.log(wave("two words"));

//   "Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"


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


const person = {
    name: "John",
    sayName(name) {
      console.log(`My name is ${this.name}.`);
    }
  };
  
  person.sayName(); // logs "My name is John."
 