/*
    1. Create an object called "mexico" with the following properties:
        - id -> 24
        - name -> "Mexico"
        - capital -> "Mexico City"
        - neighbours -> ["USA", "Guatemala", "Belize"]
    2. Print out "mexico" to the terminal
    3. Change "id" to be 25
    4. Add "Honduras" to the list of neighbours to "mexico"
    
    5. Print out "mexico" to the terminal again
*/

const mexico = {
    id: 24,
    name: "Mexico",
    capital: "Mexico City",
    neighbours: ["USA", "Guatemala", "Belize"]
}

console.log(mexico.name);
mexico.id = 25;
mexico.neighbours.push('Honduras');
console.log(mexico);


/*
    1. Create an object called "myConsole"
    
    2. Assign "myConsole" the key "log" with a value that is
       an arrow function.
       This arrow function will have one parameter called "message"
       The function will just console.log out the "message"
    3. How would you call this "log" function inside the object?
    You should be able to do: myConsole.log("Hello, friend!");
    BONUS: How might the built-in "console" work?
*/

const myConsole = {
    log: (message) => {
        console.log(message);
    }
}

myConsole.log('Hello, friend!');