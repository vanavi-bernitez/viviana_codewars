/*
https://github.com/Nooder/javascript-in-depth/tree/main/014-objects/exercises

    1. Create an object called "myPet" with the following properties:
        - name -> "Sudo"
        - type -> "Dog"
        - breed -> "Poodle"
        - age -> 7
        - friends -> ["Bit", "Byte", "Data"]
    2. Print out "myPet" to the terminal
    3. Add a new property: colour -> "Black"
    4. Change "breed" to be "Beagle"
    5. Remove "Data" from the list of friends for "myPet"
    
    6. Print out "myPet" to the terminal again
    7. Add "Chip" to the list of friends for "myPet"
    8. Print out "myPet" to the terminal again
*/


const myPet = {
    name: 'Sudo',
    type: 'Dog',
    breed: 'Poodle',
    age: 7,
    friends: ['Bit', 'Byte', 'Data']
}

console.log(myPet);
myPet.colour = 'Black';
myPet.breed = 'Beagle';

const removeFriend = 'Data';
const indexToRemove = myPet.friends.findIndex((friend) => friend === removeFriend);
myPet.friends.splice(indexToRemove,1);
myPet.friends.push('Chip');

console.log(myPet);