// const getPeople = async () => {
//     try {
//         const peopleData = await fetch('https://swapi.dev/api/people/');
//         const result = await peopleData.json();
//         const peopleResult = result.results;
//         const peopleReducedProperties = peopleResult.map((person) => {
//             const selectedProperties = {
//                 name: person.name,
//                 birthYear: person['birth_year'],
//                 gender: person.gender,
//                 height: person.height
//             }
//             return selectedProperties;
//         });
//         const tallerPeople = peopleReducedProperties.filter((personProperties) => personProperties.height > 175);
//         console.log(tallerPeople);
//     } catch (error) {
//         console.error(`Something goes wrong: ${error}`);
//     }
// }

// getPeople();



const getStarships = async () => {
    try {
        const starshipsData = await fetch('https://swapi.dev/api/starships/');
        const result = await starshipsData.json();
        const starshipsResult = result.results;
        const shorterStarships = starshipsResult.filter((starship) => starship.length < 100);
        const doubleCargoCapacity = shorterStarships.map((shortStarship) => shortStarship['cargo_capacity'] * 2);
        console.log(doubleCargoCapacity);
    } catch (error) {
        console.error(`Something goes wrong: ${error}`)
    }
}

getStarships();
